import React from 'react';
import Toolbar from 'app/packages/toolbar/src/containers/Toolbar';
import Drawer from 'app/packages/toolbar/src/containers/Drawer';
import AuthDialog from 'app/packages/auth/src/containers/Dialog';
import AuthMe from 'app/packages/auth/src/renderers/Me';
import BaseLayout from '../BaseLayout';

const MainLayout = (props) => {

    const {
        classes,
        children,
    } = props;

    return (
        <BaseLayout>
            <Toolbar
                classes={{
                    root: classes.toolbar,
                }}
            />
            {children}
            <AuthDialog/>
            <AuthMe/>
            <Drawer/>
        </BaseLayout>
    );
};

export default MainLayout;
