import {createFragmentContainer, graphql} from 'react-relay';

export default WrappedComponent => (
    createFragmentContainer(WrappedComponent, {
        data: graphql`
        fragment NewsSingleNewsRelay_data on News {
            _id
            id
            title
            image
            content
            refUrl
            abstract
            source {
                title
            }
            tagsTitle
            categoriesTitle
            pubDate
            category {
                id
                ...NewsSingleRelatedNewsRelay_data
                ...NewsSingleCategoryCardRelay_data
            }
        }
    `
    })
)
