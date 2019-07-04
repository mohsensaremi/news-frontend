import {createFragmentContainer, graphql} from 'react-relay';

export default WrappedComponent => (
    createFragmentContainer(WrappedComponent, {
        data: graphql`
        fragment NewsSingleHeadRelay_data on News {
            title
            image
            content
            refUrl
            pubDateISO
            abstract
            source {
                title
                url
                logo
            }
            metaKeywords
            metaDescription
        }
    `
    })
)
