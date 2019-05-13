import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Toast} from 'packages/toast';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from 'app/themes/theme1';

const Router = (props) => {

    const {
        classes,
    } = props;

    return (
        <MuiThemeProvider theme={theme}>
            <Switch>
                <Route path={`/`} render={() => {
                    return (
                        <div>
                            test
                        </div>
                    );
                }}/>
            </Switch>
            <Toast/>
        </MuiThemeProvider>
    );
};

export default Router;
