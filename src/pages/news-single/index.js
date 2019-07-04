import React from 'react';
import MainLayout from 'app/layouts/MainLayout';
import News from 'app/packages/news-single/src/renderers/News';
import withData from "app/relay/ssr/withData";
import query from "app/packages/toolbar/src/renderers/ToolbarItems/ToolbarToolbarItemsQuery";
import query2 from "app/packages/news-single/src/renderers/News/NewsSingleNewsQuery";
import {actions} from 'packages/global-state';

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
    query: [query2, query],
    abort404: [
        (props) => props.newsById === null,
    ],
    onSuccess: [
        (props, ctx) => {
            if (!process.browser) {
                ctx.reduxStore.dispatch(actions.set('activeMenu', props.newsById.category._id));
            }
        },
    ],
});