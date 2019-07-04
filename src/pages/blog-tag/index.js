import React from 'react';
import BlogIndexTag from 'app/packages/blog-index/src/screens/Tag';
import BlogLayout from 'app/layouts/BlogLayout';
import query from 'app/packages/blog-index/src/screens/Tag/BlogIndexTag.js';
import queryLayout from 'app/packages/blog-index/src/renderer/NavBar/BlogIndexNavBarQuery';
import withData from 'app/relay/ssr/withData';

const BlogTagPage = (props) => {

    const {
        relayVariables
    } = props;

    return (
        <BlogLayout>
            <BlogIndexTag
                relayVariables={relayVariables[0]}
            />
        </BlogLayout>
    );
};

BlogTagPage.getInitialProps = async (ctx) => {

    return {
        relayVariables: [
            {
                first: 12,
                isVideo: ctx.query.video && ctx.query.video === 'video',
                link: ctx.query.link,
            },
            {},
        ],
    };
};

export default withData(BlogTagPage, {
    query: [query, queryLayout],
    abort404: [
        (props) => {
            return props.tagByLink === null;
        },
    ],
});
