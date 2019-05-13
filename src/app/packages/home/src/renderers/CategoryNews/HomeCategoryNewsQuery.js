import {graphql} from "react-relay";


export default graphql`
    query HomeCategoryNewsQuery($id:String!) {
        categoryById(id:$id) {
            ...HomeCategoryNewsRelay_data
        }
    }
`;
