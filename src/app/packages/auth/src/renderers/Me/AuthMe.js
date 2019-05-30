import React from 'react';
import {QueryRenderer, graphql} from 'react-relay';
import environment from 'app/relay/environment';
import {SetGlobalState} from 'packages/global-state';

const query = graphql`
    query AuthMeQuery {
        me {
            email
        }
    }
`;

const AuthMe = () => {

    return (
        <React.Fragment>
            <SetGlobalState
                itemKey={'userLoading'}
                itemValue={true}
            />
            <QueryRenderer
                query={query}
                environment={environment}
                render={({props}) => {
                    if (props) {
                        return (
                            <React.Fragment>
                                <SetGlobalState
                                    itemKey={'user'}
                                    itemValue={props.me}
                                />
                                <SetGlobalState
                                    itemKey={'userLoading'}
                                    itemValue={false}
                                />
                            </React.Fragment>
                        );
                    } else {
                        return null;
                    }
                }}
            />
        </React.Fragment>
    );
};

export default AuthMe;
