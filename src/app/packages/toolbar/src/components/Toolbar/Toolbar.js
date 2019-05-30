import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/AccountCircle';
import PersonOutlineIcon from '@material-ui/icons/AccountCircleOutlined';
import ToolbarItems from '../../renderers/ToolbarItems';

const Toolbar = (props) => {
    const {
        classes,
        openAuthDialog,
        user,
    } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <MuiToolbar classes={{
                    root: classes.toolbar,
                }}>
                    <ToolbarItems/>
                    <Button
                        variant={user ? "outlined" : "contained"}
                        color={"primary"}
                        onClick={openAuthDialog}
                    >
                        حساب کاربری
                        {
                            user ? (
                                <PersonIcon className={classes.authButtonIcon}/>
                            ) : (
                                <PersonOutlineIcon className={classes.authButtonIcon}/>
                            )
                        }
                    </Button>
                </MuiToolbar>
            </AppBar>
        </div>
    );
};

Toolbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Toolbar;
