import React from 'react';
import {QueryRenderer} from 'react-relay';
import environment from 'app/relay/environment';
import MyNewsContainer from '../../containers/MyNews';
import query from './MyNewsMyNewsQuery';
import {ErrorReload} from 'app/packages/error';
import {SetGlobalState} from "packages/global-state";

const MyNews = () => {


    return (
        <React.Fragment>
            <SetGlobalState
                itemKey={"activeMenu"}
                itemValue={"me"}
            />
            <QueryRenderer
                query={query}
                environment={environment}
                variables={{
                    first: 20,
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
                            <MyNewsContainer
                                data={props}
                            />
                        );
                    } else {
                        return (
                            null
                        );
                    }
                }}
            />
        </React.Fragment>
    );
};

export default MyNews;
