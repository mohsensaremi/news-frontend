import React from 'react';
import MainLayout from 'app/layouts/MainLayout';
import MyNews from 'app/packages/my-news/src/renderers/MyNews';
import withData from "app/relay/ssr/withData";
import query from "app/packages/toolbar/src/renderers/ToolbarItems/ToolbarToolbarItemsQuery";
import {actions} from "packages/global-state/src/actions";

const MyNewsPage = () => {

    return (
        <MainLayout>
            <MyNews/>
        </MainLayout>
    );
};

MyNewsPage.getInitialProps = async (ctx) => {
    ctx.reduxStore.dispatch(actions.set('activeMenu', 'me'));

    return await MainLayout.getInitialProps(ctx);
};

export default withData(MyNewsPage, {
    query,
});