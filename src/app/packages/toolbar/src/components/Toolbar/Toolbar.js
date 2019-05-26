import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import ToolbarItems from '../../renderers/ToolbarItems';

const Toolbar = (props) => {
    const {
        classes,
    } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <MuiToolbar>
                        <ToolbarItems/>
                </MuiToolbar>
            </AppBar>
        </div>
    );
};

Toolbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Toolbar;
