import React from 'react';
import Toolbar from 'app/packages/toolbar/src/containers/Toolbar';
import AuthDialog from 'app/packages/auth/src/containers/Dialog';
import AuthMe from 'app/packages/auth/src/renderers/Me';

const MainLayout = (props) => {

    const {
        classes,
        children,
    } = props;

    return (
        <React.Fragment>
            <Toolbar
                classes={{
                    root: classes.toolbar,
                }}
            />
            {children}
            <AuthDialog/>
            <AuthMe/>
        </React.Fragment>
    );
};

export default MainLayout;
