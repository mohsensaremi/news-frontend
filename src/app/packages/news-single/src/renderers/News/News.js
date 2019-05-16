import React from 'react';
import {QueryRenderer} from 'react-relay';
import environment from 'app/relay/environment';
import NewsContainers from '../../containers/News';
import query from './NewsSingleNewsQuery';
import {ErrorReload} from 'app/packages/error';

const News = (props) => {

    const {
        match,
    } = props;

    return (
        <QueryRenderer
            query={query}
            environment={environment}
            variables={{
                id: match.params.id,
            }}
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
