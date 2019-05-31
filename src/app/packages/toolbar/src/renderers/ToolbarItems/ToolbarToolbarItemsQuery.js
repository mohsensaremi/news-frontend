import {graphql} from "react-relay";


export default graphql`
    query ToolbarToolbarItemsQuery {
        allCategories {
            id
            link
            title
        }
    }
`;
