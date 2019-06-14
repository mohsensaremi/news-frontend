import {
    Network,
} from 'relay-runtime';
import fetchData from './fetchData';
import persistQueries from 'persisted-queries';
import LocalStorageCache from './cache/LocalStorage';
import cache from './cache/responseCache';


const network = Network.create((operation, variables, cacheConfig, uploadables) => {

    const queryId = operation.id;
    const isMutation = operation.operationKind === 'mutation';
    const isQuery = operation.operationKind === 'query';
    const forceFetch = cacheConfig && cacheConfig.force;
    let localStorageCache = null;

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
        if (Array.isArray(json.errors) && json.errors.length > 0) {
            if (json.errors[0].extensions.code === "PERSISTED_QUERY_NOT_FOUND") {
                return fetchData({
                    ...fetchDataBody,
                    query: persistQueries[queryId].query,
                }).then(fetchSuccess);
            }
        } else {
            return fetchSuccess(json);
        }
    });
});

export default network;
