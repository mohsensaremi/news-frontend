import {createMuiTheme} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

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
            main: red['A400'],
            light: red['A400'],
            dark: red['A400'],
        },
        success: {
            main: '#35b995',
            contrastText: '#fff',
        },
    },
    typography: {
        useNextVariants: true,
        fontFamily: 'IRANSans',
        fontSize: 12,
        h1: {
            fontWeight: 500,
            fontSize: 22,
            lineHeight: '28px',
        },
        h2: {
            fontWeight: 400,
            fontSize: 18,
            lineHeight: '28px',
        },
        body1: {
            lineHeight: '24px',
        },
        button: {
            fontSize: 12,
            fontWeight: 'normal'
        },
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
        maxWidth2: 1000,
        shadow: theme.shadows[1],
        linkColor: blue[500],
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
        MuiTypography: {
            variant: 'body2',
        },
    },
    overrides: {
        MuiTab: {
            textColorInherit: {
                opacity: 1
            },
        },
        MuiPaper: {
            rounded: {
                overflow: 'hidden',
            },
        },
        MuiButton: {
            root: {
                borderRadius: theme.shape.borderRadiusButton,
            },
        },
    },
};

theme.variables = theme.variable;

export default theme;
