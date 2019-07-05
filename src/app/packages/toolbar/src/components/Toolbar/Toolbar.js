import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import PersonIcon from '@material-ui/icons/AccountCircle';
import PersonOutlineIcon from '@material-ui/icons/AccountCircleOutlined';
import ToolbarItems from '../../renderers/ToolbarItems';
import {
    usePopupState,
    bindTrigger,
    bindMenu,
} from 'material-ui-popup-state/hooks'

const Toolbar = (props) => {
    const {
        classes,
        openAuthDialog,
        user,
        isMobile,
        openDrawer,
    } = props;

    const popupState = usePopupState({variant: 'popover', popupId: 'toolbarAuthButtonMenu'});
    let buttonProps = {};
    if (user) {
        buttonProps = bindTrigger(popupState);
    } else {
        buttonProps = {
            onClick: openAuthDialog,
        };
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <MuiToolbar classes={{
                    root: classes.toolbar,
                }}>
                    {
                        isMobile ? (
                            <IconButton
                                onClick={openDrawer}
                            >
                                <MenuIcon/>
                            </IconButton>
                        ) : (
                            <ToolbarItems/>
                        )
                    }
                    <Button
                        variant={user ? "outlined" : "contained"}
                        color={"primary"}
                        {...buttonProps}
                    >
                        {
                            user ? (user.get('email')) : ('حساب کاربری')
                        }
                        {
                            user ? (
                                <PersonIcon className={classes.authButtonIcon}/>
                            ) : (
                                <PersonOutlineIcon className={classes.authButtonIcon}/>
                            )
                        }
                    </Button>
                    <Menu
                        {...bindMenu(popupState)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        getContentAnchorEl={null}
                    >
                        <MenuItem onClick={popupState.close}>خروج</MenuItem>
                    </Menu>
                </MuiToolbar>
            </AppBar>
        </div>
    );
};

Toolbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Toolbar;
