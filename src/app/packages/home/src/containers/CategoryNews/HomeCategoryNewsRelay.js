import {createFragmentContainer, graphql} from 'react-relay';

export default WrappedComponent => (
    createFragmentContainer(WrappedComponent, {
        data: graphql`
        fragment HomeCategoryNewsRelay_data on Category {
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
