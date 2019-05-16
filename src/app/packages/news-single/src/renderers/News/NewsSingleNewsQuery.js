import {graphql} from "react-relay";


export default graphql`
    query NewsSingleNewsQuery($id:String!) {
        newsById(id:$id) {
            ...NewsSingleNewsRelay_data
        }
    }
`;
