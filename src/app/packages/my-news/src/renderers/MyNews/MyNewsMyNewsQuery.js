import {graphql} from "react-relay";


export default graphql`
    query MyNewsMyNewsQuery($first:Int!) {
        ...NewsListPaginateMyNewsRelay_data @arguments(first:$first)
    }
`;
