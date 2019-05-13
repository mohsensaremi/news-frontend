import React from 'react';
import {QueryRenderer} from 'react-relay';
import environment from 'app/relay/environment';
import HomeContainers from '../../containers/Home';
import query from './HomeHomeQuery';
import {ErrorReload} from 'app/packages/error';

const Home = () => {


    return (
        <QueryRenderer
            query={query}
            environment={environment}
            render={({props, error, retry}) => {
                if (error) {
                    return (
                        <ErrorReload
                            onReload={retry}
                        />
                    );
                } else if (props) {
                    return (
                        <HomeContainers
                            data={props.allCategories}
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

export default Home;
