import {createFragmentContainer, graphql} from 'react-relay';

export default WrappedComponent => (
    createFragmentContainer(WrappedComponent, {
        data: graphql`
        fragment NewsSingleRelatedNewsRelay_data on Category {
            news(first:10) {
                edges {
                    node {
                        id
                        ...NewsDesignDesign2Relay_data
                    }
                }
            }
        }
    `
    })
)
