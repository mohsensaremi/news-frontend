import {
    commitMutation,
    graphql,
} from 'react-relay';

import {getClientEnvironment} from 'app/relay/environment';

const mutation = graphql`
    mutation FollowFollowMutation($type: String!, $id: String!){
        follow(type: $type, id: $id) {
            result {
                success
            }
            followCount {
                followsCount
                status
            }
        }
    }
`;

export default (variables) => {

    return new Promise((resolve, reject) => {

        commitMutation(getClientEnvironment(), {
            mutation,
            variables,
            onCompleted: resolve,
            onError: reject,
        })
    });
};
