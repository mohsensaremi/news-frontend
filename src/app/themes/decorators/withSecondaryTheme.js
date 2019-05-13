import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

export const secondaryTheme = theme => ({
    ...theme,
    palette: {
        ...theme.palette,
        primary: theme.palette.secondary,
    },
});

function withSecondaryTheme(WrappedComponent) {

    return (props) => (
        <MuiThemeProvider theme={secondaryTheme}>
            <WrappedComponent {...props}/>
        </MuiThemeProvider>
    );
}

export default withSecondaryTheme;
