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
            newsSource:source {
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
