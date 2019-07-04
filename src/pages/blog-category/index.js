import React from 'react';
import BlogIndexCategory from 'app/packages/blog-index/src/screens/Filtered';
import BlogLayout from 'app/layouts/BlogLayout';
import query from 'app/packages/blog-index/src/screens/Filtered/BlogIndexFiltered';
import queryLayout from 'app/packages/blog-index/src/renderer/NavBar/BlogIndexNavBarQuery';
import withData from 'app/relay/ssr/withData';

const BlogCategoryPage = (props) => {

    const {
        relayVariables
    } = props;

    return (
        <BlogLayout>
            <BlogIndexCategory
                relayVariables={relayVariables[0]}
            />
        </BlogLayout>
    );
};

BlogCategoryPage.getInitialProps = async (ctx) => {


    return {
        relayVariables: [
            {
                first: 12,
                isVideo: ctx.query.video && ctx.query.video === 'video',
                link: ctx.query.link,
            },
            {},
        ]
    };
};

export default withData(BlogCategoryPage, {
    query: [query,queryLayout],
    abort404: [
        (props) => {
            return props.categoryByLink === null;
        }
    ],
});
