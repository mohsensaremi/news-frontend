import React from 'react';
import MainLayout from 'app/layouts/MainLayout';
import Home from 'app/packages/home/src/renderers/Home';
import withData from "app/relay/ssr/withData";
import query from "app/packages/toolbar/src/renderers/ToolbarItems/ToolbarToolbarItemsQuery";

const HomePage = () => {

    return (
        <MainLayout>
            <Home/>
        </MainLayout>
    );
};

HomePage.getInitialProps = async (ctx) => {

    return await MainLayout.getInitialProps(ctx);
};

export default withData(HomePage, {
    query,
});