import {createPaginationContainer, graphql} from 'react-relay';

export default WrappedComponent => (
    createPaginationContainer(WrappedComponent, graphql`
    fragment NewsListPaginateRelay_data on Category
        @argumentDefinitions(
            first: {type: "Int", defaultValue: 10}
            after: {type: "String"}
        ) {
            news(first: $first, after: $after)
                @connection(key: "NewsListPaginate_news",filters: []) {
                    edges {
                        ...NewsListListRelay_data
                    }
            }
    }
    `,
        {
            direction: 'forward',
            query: graphql`
              query NewsListPaginateRelayForwardQuery($categoryId: String!, $first: Int!, $after: String) {
                categoryById(id:$categoryId){
                    ...NewsListPaginateRelay_data @arguments(first: $first, after: $after)
                }
              }
    `,
            getConnectionFromProps(props) {
                return props.data && props.data.news
            },
            getFragmentVariables(prevVars, totalCount) {
                return {
                    ...prevVars,
                    count: totalCount,
                };
            },
            getVariables(props, pageInfo, fragmentVariables) {

                return {
                    count: pageInfo.count,
                    first: pageInfo.count,
                    after: pageInfo.cursor,
                    categoryId: fragmentVariables.categoryId,
                };
            },
        }
    )
)
