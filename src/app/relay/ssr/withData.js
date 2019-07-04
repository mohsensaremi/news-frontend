import React from 'react';
import initEnvironment from './createRelayEnvironment';
import {fetchQuery, ReactRelayContext} from 'react-relay';
import {RelayServerDataProvider} from 'packages/relay-server-data-provider';
import {RelayServerResponseProvider} from 'packages/relay-server-response-provider';
import {objectToQueryStringSorted} from 'util/util/string';

let queryRecords = {};

export default (ComposedComponent, options = {}) => {
    return class WithData extends React.Component {
        static displayName = `WithData(${ComposedComponent.displayName})`

        static async getInitialProps(ctx) {
            // Evaluate the composed component's getInitialProps()
            let composedInitialProps = {}
            if (ComposedComponent.getInitialProps) {
                composedInitialProps = await ComposedComponent.getInitialProps(ctx)
            }

            let queryProps = {};
            queryRecords = {};
            let relayServerData = {};
            // store server responses for prevent request in client
            let relayServerResponseCache = {};
            const environment = initEnvironment();

            if (options.query && !process.browser) {
                // can fetch multiple query in server
                const queries = Array.isArray(options.query) ? options.query : [options.query];

                // queries variables. share variables between queries
                const variables = Array.isArray(composedInitialProps.relayVariables) ? composedInitialProps.relayVariables : [composedInitialProps.relayVariables];
                for (let i = 0; i < queries.length; i++) {
                    const query = queries[i];
                    const queryVars = variables[i];
                    if (queryVars) {
                        const queryVarsStr = objectToQueryStringSorted(queryVars);
                        const q = query();
                        const key = `${q.operation.name}?${queryVarsStr}`;

                        let cacheConfig = {};

                        const result = await fetchQuery(environment, query, queryVars, cacheConfig);
                        if (Array.isArray(options.abort404) && typeof options.abort404[i] === 'function') {
                            const shouldAbort = options.abort404[i](result);
                            if (shouldAbort) {
                                ctx.res.statusCode = 404;
                                ctx.res.end('Not found');
                                return;
                            }
                        }
                        if (Array.isArray(options.onSuccess) && typeof options.onSuccess[i] === 'function') {
                            options.onSuccess[i](cacheConfig.response.data, ctx);
                        }

                        // after fetch cacheConfig contains key and response
                        relayServerResponseCache[cacheConfig.key] = cacheConfig.response;

                        // store all server side data for provider
                        relayServerData = {
                            ...relayServerData,
                            [key]: result,
                        };
                    }
                }
                queryRecords = environment
                    .getStore()
                    .getSource()
                    .toJSON();
            }

            return {
                ...composedInitialProps,
                ...queryProps,
                relayServerData,
                relayServerResponseCache,
            }
        }

        constructor(props) {
            super(props);
            this.environment = initEnvironment({
                records: queryRecords
            })
        }

        render() {
            const {
                relayServerData,
                relayServerResponseCache,
                ...props
            } = this.props;

            const jsx = (
                <RelayServerResponseProvider relayServerResponse={relayServerResponseCache}>
                    <RelayServerDataProvider relayServerData={relayServerData}>
                        <ComposedComponent {...props} />
                    </RelayServerDataProvider>
                </RelayServerResponseProvider>
            );

            return process.browser ? (
                jsx
            ) : (
                <ReactRelayContext.Provider
                    value={{environment: this.environment, variables: {}}}
                >
                    {jsx}
                </ReactRelayContext.Provider>
            )
        }
    }
}
