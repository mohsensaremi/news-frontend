import queries from './queries'
import fetchData from "../../../src/app/relay/environment/fetchData";

class Store {
    store = [];

    async load(names, variables) {
        if (process.env.NODE_ENV === 'production') {
            const query = queries.find(names);
            if (query) {
                const fetchDataBody = {
                    extensions: {
                        persistedQuery: {
                            version: 1,
                            sha256Hash: query.sha256,
                        }
                    },
                    variables,
                };

                const promise = new Promise((resolve) => {
                    return fetchData(fetchDataBody).then(json => {
                        if (Array.isArray(json.errors) && json.errors.length > 0 && json.errors[0].extensions.code === "PERSISTED_QUERY_NOT_FOUND") {
                            return fetchData({
                                ...fetchDataBody,
                                query: query.query,
                            }).then(resolve);
                        } else {
                            return resolve(json);
                        }
                    });
                });

                const value = await promise;
                this.store.push({
                    id: query.id,
                    value,
                    variables,
                });
                return this;
            }
        }
    }

    getStore() {
        return this.store;
    }
}

export default Store;
