import {graphql} from "react-relay";


export default graphql`
    query FollowFollowCountProviderQuery($id:String!, $type:String!) {
        followCount(id:$id, type:$type) {
            followsCount
            status
        }
    }
`;
