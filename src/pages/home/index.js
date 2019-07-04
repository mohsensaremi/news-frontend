import React from 'react';
import MainLayout from 'app/layouts/MainLayout';
import Home from 'app/packages/home/src/renderers/Home';
import withData from 'app/relay/ssr/withData';

const HomePage = () => {

    return (
        <MainLayout>
            <Home/>
        </MainLayout>
    );
};

HomePage.getInitialProps = async () => {

    return {};
};

export default withData(HomePage, {});
