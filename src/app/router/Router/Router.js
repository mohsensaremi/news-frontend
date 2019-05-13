import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Toast} from 'packages/toast';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from 'app/themes/theme1';
import Home from 'app/packages/home/src/renderers/Home';

const Router = () => {

    return (
        <MuiThemeProvider theme={theme}>
            <Switch>
                <Route path={`/`} component={Home}/>
            </Switch>
            <Toast/>
        </MuiThemeProvider>
    );
};

export default Router;
