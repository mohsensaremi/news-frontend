import React from 'react';
import SSRQueryRenderer from 'app/relay/ssr/SSRQueryRenderer';
import {getClientEnvironment} from 'app/relay/environment';
import NewsContainers from '../../containers/News';
import Head from '../../containers/Head';
import query from './NewsSingleNewsQuery';
import {ErrorReload} from 'app/packages/error';

const News = (props) => {

    const {
        relayVariables,
    } = props;

    return (
        <SSRQueryRenderer
            query={query}
            environment={getClientEnvironment()}
            variables={relayVariables}
            render={({props, error, retry}) => {
                if (error) {
                    return (
                        <ErrorReload
                            onReload={retry}
                        />
                    );
                } else if (props) {
                    return (
                        <React.Fragment>
                            <Head
                                data={props.newsById}
                            />
                            <NewsContainers
                                data={props.newsById}
                            />
                        </React.Fragment>
                    );
                } else {
                    return (
                        null
                    );
                }
            }}
        />
    );
};

export default News;
