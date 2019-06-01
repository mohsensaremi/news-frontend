import {graphql} from "react-relay";


export default graphql`
    query ToolbarToolbarItemsQuery {
        allCategories {
            _id
            id
            link
            title
        }
    }
`;
