import {graphql} from "react-relay";


export default graphql`
    query CategorySingleCategoryQuery($id:String!, $first:Int!) {
        categoryById(id:$id) {
            ...CategorySingleCategoryRelay_data @arguments(first:$first)
        }
    }
`;
