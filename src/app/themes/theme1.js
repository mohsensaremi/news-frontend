import {createMuiTheme} from '@material-ui/core/styles';

let theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1024,
            lg: 1280,
            xl: 1920,
        },
    },
    direction: 'rtl',
    palette: {
        primary: {
            main: '#35b995',
            contrastText: '#fff',
        },
        secondary: {
            main: '#4d70aa',
            contrastText: '#fff',
        },
        success:{
            main: '#35b995',
            contrastText: '#fff',
        },
    },
    typography: {
        useNextVariants: true,
        fontFamily: 'IRANSans',
        fontSize: 12,
    },
    shape: {
        borderRadius: 10,
        borderRadiusButton: 30,
        borderRadius2: 5,
    },
});

theme = {
    ...theme,
    variable: {
        maxWidth: 1100,
        shadow: theme.shadows[1],
        transition: theme.transitions.create('all', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    props: {
        MuiCheckbox: {
            color: 'primary',
        },
        MuiRadio: {
            color: 'primary',
        },
        MuiPaper: {
            elevation: 1,
        },
    },
    overrides: {
        MuiTab: {
            textColorInherit: {
                opacity: 1
            },
        },
    },
};

theme.variables = theme.variable;

export default theme;
