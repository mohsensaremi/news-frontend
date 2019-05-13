import {createFragmentContainer, graphql} from 'react-relay';

export default WrappedComponent => (
    createFragmentContainer(WrappedComponent, graphql`
        fragment HomeHomeRelay on Category @relay(plural:true) {
            ...HomeCategoryRelay
        }
    `)
)
