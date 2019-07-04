import React from 'react';
import Blog from 'app/packages/blog/src/renderers/Blog';
import query from 'app/packages/blog/src/renderers/Blog/BlogBlogQuery';
import withData from 'app/relay/ssr/withData';
import MainLayout from 'app/layouts/MainLayout';

const BlogPage = (props) => {

    const {
        relayVariables
    } = props;

    return (
        <MainLayout>
            <Blog relayVariables={relayVariables}/>
        </MainLayout>
    );
};

BlogPage.getInitialProps = async (ctx) => {

    return {
        relayVariables: {
            link: ctx.query.link,
        }
    };
};

export default withData(BlogPage, {
    query,
    abort404: [
        (props) => props.post === null
    ],
});
