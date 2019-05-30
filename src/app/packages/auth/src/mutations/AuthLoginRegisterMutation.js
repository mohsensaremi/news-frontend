import {
    commitMutation,
    graphql,
} from 'react-relay';

import environments from 'app/relay/environment';

const mutation = graphql`
    mutation AuthLoginRegisterMutation($email: String!, $password: String!){
        loginRegisterUser(email: $email, password: $password) {
            result {
                success
            }
            token
            user {
                email
            }
        }
    }
`;

export default (variables) => {

    return new Promise((resolve, reject) => {

        commitMutation(environments, {
            mutation,
            variables,
            onCompleted: resolve,
            onError: reject,
        })
    });
};
