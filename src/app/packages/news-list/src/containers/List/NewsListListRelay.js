import {createFragmentContainer, graphql} from 'react-relay';

export default WrappedComponent => (
    createFragmentContainer(WrappedComponent, graphql`
    fragment NewsListListRelay_data on NewsEdge @relay(plural: true) {
            node {
                ...NewsDesignDesign1Relay_data
                ...NewsDesignDesign2Relay_data
            }
        }
    `)
)
