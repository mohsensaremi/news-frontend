import React from 'react';
import SSRQueryRenderer from 'app/relay/ssr/SSRQueryRenderer';
import {getClientEnvironment} from 'app/relay/environment';
import NewsContainers from '../../containers/News';
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
                        <NewsContainers
                            data={props.newsById}
                        />
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
