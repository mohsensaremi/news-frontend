import {graphql} from "react-relay";


export default graphql`
    query HomeHomeQuery {
        allCategories {
            ...HomeHomeRelay_data
        }
    }
`;
