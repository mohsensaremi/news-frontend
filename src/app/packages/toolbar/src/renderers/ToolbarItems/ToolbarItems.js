import React from 'react';
import {QueryRenderer} from 'react-relay';
import environment from 'app/relay/environment';
import query from './ToolbarToolbarItemsQuery';
import {ErrorReload} from 'app/packages/error';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const ToolbarItems = (props) => {

    const {
        classes,
        activeCategoryId,
    } = props;

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
