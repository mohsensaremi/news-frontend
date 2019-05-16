import {createFragmentContainer, graphql} from 'react-relay';

export default WrappedComponent => (
    createFragmentContainer(WrappedComponent, {
        data: graphql`
        fragment NewsSingleSourceCardRelay_data on NewsSource {
            title
        }
    `
    })
)
