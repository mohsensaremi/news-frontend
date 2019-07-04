const storageCacheVersion = process.env.STORAGE_CACHE_VERSION;

class LocalStorage {
    constructor(queryId, variables, cacheConfig) {
        this.queryId = queryId;
        this.variables = variables;
        this.cacheKey = queryId + JSON.stringify(variables);
        this.cacheConfig = cacheConfig;
    }

    get() {
        try {
            const cacheValue = JSON.parse(
                window.localStorage.getItem(this.cacheKey)
            );
            if (this.cacheConfig.ttl) {
                if (cacheValue.version === storageCacheVersion) {
                    const date1 = new Date(cacheValue.createdAt);
                    const timeStamp = Math.round(new Date().getTime() / 1000);
                    const timeStampYesterday = timeStamp - (this.cacheConfig.ttl);
                    const is24 = date1 >= new Date(timeStampYesterday).getTime();
                    if (is24) {
                        return cacheValue.response;
                    } else {
                        window.localStorage.removeItem(this.cacheKey);
                    }
                }
            } else {
                return cacheValue.response;
            }
        } catch (e) {
            window.localStorage.removeItem(this.cacheKey);
        }

        return null;
    }

    set(json) {
        try {
            window.localStorage.setItem(this.cacheKey, JSON.stringify({
                response: json,
                createdAt: Math.round(Date.now() / 1000),
                version: storageCacheVersion,
            }));
        } catch (e) {

        }
    }
}

export default LocalStorage;
