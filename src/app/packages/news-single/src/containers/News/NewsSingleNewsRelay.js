import {createFragmentContainer, graphql} from 'react-relay';

export default WrappedComponent => (
    createFragmentContainer(WrappedComponent, {
        data: graphql`
        fragment NewsSingleNewsRelay_data on News {
            id
            title
            image
            content
            refUrl
            abstract
            source {
                title
                ...NewsSingleSourceCardRelay_data
            }
            tagsTitle
            categoriesTitle
            pubDate
            category {
                news(first:10) {
                    ...NewsSingleRelatedNewsRelay_data
                }
            }
        }
    `
    })
)
