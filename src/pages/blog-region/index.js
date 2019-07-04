import React from 'react';
import BlogRegion from 'app/packages/blog-index/src/screens/RegionBlog';
import BlogLayout from 'app/layouts/BlogLayout';
import query from 'app/packages/blog-index/src/screens/RegionBlog/BlogIndexRegionBlog';
import queryLayout from 'app/packages/blog-index/src/renderer/NavBar/BlogIndexNavBarQuery';
import withData from 'app/relay/ssr/withData';

const BlogRegionPage = (props) => {

    const {
        relayVariables
    } = props;

    return (
        <BlogLayout>
            <BlogRegion
                relayVariables={relayVariables[0]}
            />
        </BlogLayout>
    );
};

BlogRegionPage.getInitialProps = async (ctx) => {

    return {
        relayVariables: [
            {
                link: ctx.query.link,
                region: ctx.query.region,
                first: 12
            },
            {},
        ],
    };
};

export default withData(BlogRegionPage, {
    query: [query, queryLayout],
    abort404: [
        (props) => {
            return props.tagByLink === null;
        },
    ],
});
