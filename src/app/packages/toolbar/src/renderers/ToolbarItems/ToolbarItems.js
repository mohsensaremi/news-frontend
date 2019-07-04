import React from 'react';
import SSRQueryRenderer from 'app/relay/ssr/SSRQueryRenderer';
import {getClientEnvironment} from 'app/relay/environment';
import query from './ToolbarToolbarItemsQuery';
import {ErrorReload} from 'app/packages/error';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from 'utils/components/Link';
import classnames from 'classnames';

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
                        <Tabs className={classes.root} value={activeMenu} onChange={onChangeTab}>
                            <Tab
                                classes={{
                                    root: classes.tab,
                                }}
                                value={'home'}
                                label={'صفحه اصلی'}
                                component={Link}
                                route={'home'}
                            />
                            <Tab
                                classes={{
                                    root: classnames(classes.tab, classes.primaryColorLabel),
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
                                            }}
                                            key={item.id}
                                            value={item._id}
                                            label={item.title}
                                            component={Link}
                                            route={'category'}
                                            params={{
                                                id: item._id,
                                            }}
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
