import React from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import DrawerItems from '../../renderers/DrawerItems';

const Drawer = (props) => {
    const {
        onClose,
        onOpen,
        open,
    } = props;


    return (
        <SwipeableDrawer
            open={open}
            onClose={onClose}
            onOpen={onOpen}
        >
            <DrawerItems/>
        </SwipeableDrawer>
    );
};

Drawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Drawer;
