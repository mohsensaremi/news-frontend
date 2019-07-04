import withStyles from '@material-ui/core/styles/withStyles';
import theme from "../../router/Router/style";

export default withStyles(theme => ({
    '@global': {
        body: {
            margin: 0,
            direction: 'rtl',
            fontSize: 12,
            fontFamily: 'IRANSans',
            backgroundColor: theme.palette.background.default,
        },
        a: {
            color: 'inherit',
            textDecoration: 'none',
            outline: 'none',
        },
        input: {
            outline: 'none',
        },
        ".limitWidth": {
            maxWidth: theme.variable.maxWidth,
            margin: 'auto',
        },
        '[lang=en]': {
            fontFamily: "'arial', 'sans-serif'",
        },
        "svg[class*='fa-']": {
            width: '1em',
            height: '1em',
        },
        '.nl2br': {
            whiteSpace: 'pre-line',
        },
        '.dFlex': {
            display: 'flex',
        },
        '.flip': {
            '-webkit-transform': 'scaleX(-1)',
            transform: 'scaleX(-1)',
        },

    },
}), {flip: false});
