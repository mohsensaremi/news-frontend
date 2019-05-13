import {createFragmentContainer, graphql} from 'react-relay';

export default WrappedComponent => (
    createFragmentContainer(WrappedComponent, {
        data: graphql`
        fragment HomeCategoryRelay_data on Category {
            title
            news(first:10) {
                edges {
                    node {
                        id
                        ...NewsDesignDesign1Relay_data
                    }
                }
            }
        }
    `
    })
)
