import React from 'react';
import {QueryRenderer} from 'react-relay';
import {getClientEnvironment} from 'app/relay/environment';
import query from './ToolbarToolbarItemsQuery';
import {ErrorReload} from 'app/packages/error';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from "react-router-dom";

const ToolbarItems = (props) => {

    const {
        classes,
        activeMenu,
        hasUser,
        openAuthDialog,
        onChangeTab,
    } = props;

    const meTabProps = {};
    if (hasUser) {
        meTabProps.component = Link;
        meTabProps.to = "/me";
    } else {
        meTabProps.onClick = openAuthDialog;
    }

    return (
        <QueryRenderer
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
                        <Tabs className={classes.root} value={activeMenu} onChange={onChangeTab}>
                            <Tab
                                classes={{
                                    root: classes.tab,
                                    labelContainer: classes.labelContainer,
                                }}
                                value={'home'}
                                label={'صفحه اصلی'}
                                component={Link}
                                to={'/'}
                            />
                            <Tab
                                classes={{
                                    root: classes.tab,
                                    labelContainer: classes.labelContainer,
                                    label: classes.primaryColorLabel,
                                }}
                                value={'me'}
                                label={'اخبار من'}
                                {...meTabProps}
                            />
                            {
                                props.allCategories.map(item => {
                                    return (
                                        <Tab
                                            classes={{
                                                root: classes.tab,
                                                labelContainer: classes.labelContainer,
                                            }}
                                            key={item.id}
                                            value={item._id}
                                            label={item.title}
                                            component={Link}
                                            to={item.link}
                                        />
                                    );
                                })
                            }
                        </Tabs>
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

export default ToolbarItems;
