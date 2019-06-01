import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Toast} from 'packages/toast';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from 'app/themes/theme1';
import Toolbar from 'app/packages/toolbar/src/containers/Toolbar';
import Home from 'app/packages/home/src/renderers/Home';
import News from 'app/packages/news-single/src/renderers/News';
import Category from 'app/packages/category-single/src/renderers/Category';
import MyNews from 'app/packages/my-news/src/renderers/MyNews';
import AuthDialog from 'app/packages/auth/src/containers/Dialog';
import AuthMe from 'app/packages/auth/src/renderers/Me';

const Router = (props) => {

    const {
        classes
    } = props;

    return (
        <MuiThemeProvider theme={theme}>
            <Toolbar
                classes={{
                    root: classes.toolbar,
                }}
            />
            <Switch>
                <Route exact path={`/news/:id`} component={News}/>
                <Route exact path={`/category/:id`} component={Category}/>
                <Route exact path={`/me`} component={MyNews}/>
                <Route path={`/`} component={Home}/>
            </Switch>
            <AuthDialog/>
            <AuthMe/>
            <Toast/>
        </MuiThemeProvider>
    );
};

export default Router;
