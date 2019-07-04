import fetch from 'isomorphic-unfetch';
import LocalStorageCache from './cache/LocalStorage';
import cache from './cache/responseCache';
import persistQueries from 'persisted-queries';
import nextData from 'utils/utils/nextData';
import {objectToQueryStringSorted} from "utils/utils/string";

export const fetchData = (body, headers) => {

    headers = {
        ...headers,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    if (typeof window !== "undefined") {
        const authorization = window.localStorage.getItem('membersAccessToken');
        if (authorization) {
            headers.authorization = `Bearer ${authorization}`;
        }
    }

    return fetch(process.env.GRAPHQL_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
    }).then(response => {
        return response.json()
    });
};


export const fetchFnClient = (operation, variables, cacheConfig, uploadables) => {

    const queryId = operation.id;
    const isMutation = operation.operationKind === 'mutation';
    const isQuery = operation.operationKind === 'query';
    const forceFetch = cacheConfig && cacheConfig.force;
    let localStorageCache = null;

    if(isQuery && nextData.props.pageProps.relayServerResponseCache){
        const variablesStr = objectToQueryStringSorted(variables);
        const key = `${operation.name}?${variablesStr}`;
        if (nextData.props.pageProps.relayServerResponseCache[key]) {
            return nextData.props.pageProps.relayServerResponseCache[key]
        }
    }

    if (queryId && cacheConfig.storage) {
        if (cacheConfig.storage === 'localStorage') {
            localStorageCache = new LocalStorageCache(persistQueries[queryId].sha256, variables, cacheConfig);
            const cacheValue = localStorageCache.get();
            if (cacheValue) {
                return cacheValue;
            }
        }
    }


    if (
        isQuery &&
        !forceFetch
    ) {
        const fromCache = cache.get(queryId, variables);

        if (fromCache !== undefined && fromCache !== null) {
            return fromCache;
        }
    }
    const fetchDataBody = {
        extensions: {
            persistedQuery: {
                version: 1,
                sha256Hash: persistQueries[queryId].sha256,
            }
        },
        variables,
    };

    const fetchSuccess = (json) => {
        // Update cache on queries
        if (isQuery && json) {
            // cache.set(queryId, variables, json);


            if (cacheConfig.storage) {
                if (cacheConfig.storage === 'localStorage') {
                    localStorageCache.set(json);
                }
            }
        }
        // Clear cache on mutations
        if (isMutation) {
            cache.clear();
        }

        return json;
    };

    return fetchData(fetchDataBody).then(json => {
        if (Array.isArray(json.errors) && json.errors.length > 0 && json.errors[0].extensions.code === "PERSISTED_QUERY_NOT_FOUND") {
            return fetchData({
                ...fetchDataBody,
                query: persistQueries[queryId].query,
            }).then(fetchSuccess);
        } else {
            return fetchSuccess(json);
        }
    });
};

export const fetchFnServer = (operation, variables, cacheConfig) => {

    const queryId = operation.id;
    const fetchDataBody = {
        extensions: {
            persistedQuery: {
                version: 1,
                sha256Hash: persistQueries[queryId].sha256,
            }
        },
        query: persistQueries[queryId].query,
        variables,
    };

    return fetchData(fetchDataBody).then(json => {
        const isQuery = operation.operationKind === 'query';

        if(isQuery){
            const variablesStr = objectToQueryStringSorted(variables);
            cacheConfig.key = `${operation.name}?${variablesStr}`;
            cacheConfig.response = json;
        }
        return json
    });
};


export default fetchData;
