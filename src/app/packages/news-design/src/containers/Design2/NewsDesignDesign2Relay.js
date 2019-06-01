import {createFragmentContainer, graphql} from 'react-relay';

export default WrappedComponent => (
    createFragmentContainer(WrappedComponent, {
        data: graphql`
        fragment NewsDesignDesign2Relay_data on News {
            title
            source {
                title
            }
            abstract
            link
            pubDate
        }
    `
    })
)
