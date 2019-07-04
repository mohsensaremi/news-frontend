import {createFragmentContainer, graphql} from 'react-relay';

export default WrappedComponent => (
    createFragmentContainer(WrappedComponent, {
        data: graphql`
        fragment CategorySingleHeadRelay_data on Category {
            title
        }
    `
    })
)
