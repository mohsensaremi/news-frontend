import React from 'react';
import Author from 'app/packages/author/src/renderers/Author';
import MainLayout from 'app/layouts/MainLayout';
import query from 'app/packages/author/src/renderers/Author/AuthorAuthorQuery';
import withData from 'app/relay/ssr/withData';

const BlogCategoryPage = (props) => {

    const {
        relayVariables
    } = props;

    return (
        <MainLayout>
            <Author
                relayVariables={relayVariables}
            />
        </MainLayout>
    );
};

BlogCategoryPage.getInitialProps = async (ctx) => {


    return {
        relayVariables: {
            usernameOrId: ctx.query.author,
            first: 9
        }
    };
};

export default withData(BlogCategoryPage, {
    query,
    abort404: [
        (props) => {
            return props.getUserByUsernameOrId === null;
        }
    ],
});
