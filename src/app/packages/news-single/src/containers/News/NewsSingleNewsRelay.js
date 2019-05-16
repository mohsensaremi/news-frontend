import {createFragmentContainer, graphql} from 'react-relay';

export default WrappedComponent => (
    createFragmentContainer(WrappedComponent, {
        data: graphql`
        fragment NewsSingleNewsRelay_data on News {
            id
            title
            image
            content
            sourceUrl
            sourceName
            tagsTitle
            categoriesTitle
            pubDate
        }
    `
    })
)
