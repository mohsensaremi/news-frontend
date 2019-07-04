import React from 'react';
import MainLayout from 'app/layouts/MainLayout';
import News from 'app/packages/news-single/src/renderers/News';
import withData from "app/relay/ssr/withData";
import query from "app/packages/toolbar/src/renderers/ToolbarItems/ToolbarToolbarItemsQuery";
import queryNews from "app/packages/news-single/src/renderers/News/NewsSingleNewsQuery";

const NewsSinglePage = (props) => {

    const {
        relayVariables
    } = props;

    return (
        <MainLayout>
            <News
                relayVariables={relayVariables[0]}
            />
        </MainLayout>
    );
};

NewsSinglePage.getInitialProps = async (ctx) => {

    const mainLayoutData = await MainLayout.getInitialProps(ctx);

    return {
        relayVariables: [
            {
                id: ctx.query.id,
            },
            mainLayoutData.relayVariables,
        ]
    };
};

export default withData(NewsSinglePage, {
    query: [queryNews, query],
    abort404: [
        (props) => props.newsById === null,
    ]
});