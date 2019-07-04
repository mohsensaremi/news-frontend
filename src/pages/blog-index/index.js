import React from 'react';
import BlogIndex from 'app/packages/blog-index/src/screens/Main';
import BlogLayout from 'app/layouts/BlogLayout';
import query from 'app/packages/blog-index/src/screens/Main/BlogIndexMainQuery';
import queryLayout from 'app/packages/blog-index/src/renderer/NavBar/BlogIndexNavBarQuery';
import withData from 'app/relay/ssr/withData';

const BlogIndexPage = (props) => {

    const {
        relayVariables
    } = props;

    return (
        <BlogLayout>
            <BlogIndex
                relayVariables={relayVariables[1]}
            />
        </BlogLayout>
    );
};

BlogIndexPage.getInitialProps = async () => {

    return {
        relayVariables: [
            {},
            {
                first: 10,
            },
        ]
    };
};

export default withData(BlogIndexPage, {
    query: [queryLayout, query],
});
