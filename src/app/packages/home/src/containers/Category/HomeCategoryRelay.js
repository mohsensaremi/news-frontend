import {createFragmentContainer, graphql} from 'react-relay';

export default WrappedComponent => (
    createFragmentContainer(WrappedComponent, graphql`
        fragment HomeCategoryRelay on Category {
            title
        }
    `)
)
