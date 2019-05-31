import React from 'react';
import {QueryRenderer} from 'react-relay';
import environment from 'app/relay/environment';
import query from './FollowFollowCountProviderQuery';
import {ErrorReload} from 'app/packages/error';

const FollowCountProvider = (props) => {

    const {
        children,
        id,
        type,
        follow,
        unfollow,
        loading,
    } = props;

    return (
        <QueryRenderer
            query={query}
            environment={environment}
            variables={{
                id,
                type,
            }}
            render={({props, error, retry}) => {
                if (error) {
                    return (
                        <ErrorReload
                            onReload={retry}
                        />
                    );
                } else if (props) {
                    return children({
                        ...props.followCount,
                        following: props.followCount.status === 'follow',
                        follow,
                        unfollow,
                        loading,
                    });
                } else {
                    return (
                        null
                    );
                }
            }}
        />
    );
};

export default FollowCountProvider;
