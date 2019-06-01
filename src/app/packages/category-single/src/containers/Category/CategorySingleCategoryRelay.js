import {createFragmentContainer, graphql} from 'react-relay';

export default WrappedComponent => (
    createFragmentContainer(WrappedComponent, {
        data: graphql`
        fragment CategorySingleCategoryRelay_data on Category @argumentDefinitions(
            first: {type: "Int", defaultValue: 20}
        ) {
            title
            ...NewsListPaginateRelay_data @arguments(first:$first)
        }
    `
    })
)
