import React from 'react';
import SSRQueryRenderer from 'app/relay/ssr/SSRQueryRenderer';
import {getClientEnvironment} from 'app/relay/environment';
import query from '../ToolbarItems/ToolbarToolbarItemsQuery';
import {ErrorReload} from 'app/packages/error';
import Link from 'utils/components/Link';
import classnames from 'classnames';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const DrawerItems = (props) => {

    const {
        classes,
        activeMenu,
        hasUser,
        openAuthDialog,
    } = props;

    const meTabProps = {};
    if (hasUser) {
        meTabProps.component = Link;
        meTabProps.route = "me";
    } else {
        meTabProps.onClick = openAuthDialog;
    }

    return (
        <SSRQueryRenderer
            query={query}
            environment={getClientEnvironment()}
            render={({props, error, retry}) => {
                if (error) {
                    return (
                        <ErrorReload
                            onReload={retry}
                        />
                    );
                } else if (props) {
                    return (
                        <List>
                            <ListItem
                                button
                                component={Link}
                                route={'home'}
                                className={classnames({
                                    [classes.active]: activeMenu === "home",
                                })}
                            >
                                <ListItemIcon>{<InboxIcon/>}</ListItemIcon>
                                <ListItemText primary={"صفحه اصلی"}/>
                            </ListItem>
                            <ListItem
                                button
                                className={classnames({
                                    [classes.active]: activeMenu === "me",
                                })}
                                {...meTabProps}
                            >
                                <ListItemIcon>{<InboxIcon/>}</ListItemIcon>
                                <ListItemText primary={'اخبار من'}/>
                            </ListItem>
                            {
                                props.allCategories.map(item => {
                                    return (
                                        <ListItem
                                            key={item.id}
                                            button
                                            component={Link}
                                            route={'category'}
                                            params={{
                                                id: item._id,
                                            }}
                                            className={classnames({
                                                [classes.active]: activeMenu === item._id,
                                            })}
                                        >
                                            <ListItemIcon>{<InboxIcon/>}</ListItemIcon>
                                            <ListItemText primary={item.title}/>
                                        </ListItem>
                                    );
                                })
                            }
                        </List>
                    );
                } else {
                    return (
                        null
                    );
                }
            }}
        />
    );
};

export default DrawerItems;
