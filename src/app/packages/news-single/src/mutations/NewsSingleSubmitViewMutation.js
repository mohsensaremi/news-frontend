import {
    commitMutation,
    graphql,
} from 'react-relay';

import {getClientEnvironment} from 'app/relay/environment';

const mutation = graphql`
    mutation NewsSingleSubmitViewMutation($id: String!){
        submitNewsView(id: $id) {
            result {
                 success
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
