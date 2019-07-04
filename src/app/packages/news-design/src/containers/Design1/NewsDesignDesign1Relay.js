import {createFragmentContainer, graphql} from 'react-relay';

export default WrappedComponent => (
    createFragmentContainer(WrappedComponent, {
        data: graphql`
        fragment NewsDesignDesign1Relay_data on News {
            title
            source {
                title
            }
            category {
                title
            }
            abstract
            _id
            pubDate
        }
    `
    })
)
