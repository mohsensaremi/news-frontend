import {createFragmentContainer, graphql} from 'react-relay';

export default WrappedComponent => (
    createFragmentContainer(WrappedComponent, {
        data: graphql`
        fragment HomeHomeRelay_data on Category @relay(plural:true) {
            id
            ...HomeCategoryRelay_data
        }
    `
    })
)
