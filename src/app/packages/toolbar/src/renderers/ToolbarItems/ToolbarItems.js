import React from 'react';
import {QueryRenderer} from 'react-relay';
import environment from 'app/relay/environment';
import query from './ToolbarToolbarItemsQuery';
import {ErrorReload} from 'app/packages/error';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from "react-router-dom";

const ToolbarItems = (props) => {

    const {
        classes,
        activeCategoryId,
        hasUser,
        openAuthDialog,
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
            environment={environment}
            render={({props, error, retry}) => {
                if (error) {
                    return (
                        <ErrorReload
                            onReload={retry}
                        />
                    );
                } else if (props) {
                    return (
                        <Tabs className={classes.root} value={activeCategoryId}>
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
                                            value={item.id}
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
