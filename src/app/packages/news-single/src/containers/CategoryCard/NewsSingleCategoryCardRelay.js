import {createFragmentContainer, graphql} from 'react-relay';

export default WrappedComponent => (
    createFragmentContainer(WrappedComponent, {
        data: graphql`
        fragment NewsSingleCategoryCardRelay_data on Category {
            _id
            title
        }
    `
    })
)
