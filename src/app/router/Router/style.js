import withStyles from '@material-ui/core/styles/withStyles';
import theme from 'app/themes/theme1';

export default withStyles({
    '@global': {
        "body": {
            backgroundColor: theme.palette.background.default,
        },
        ".inheritTypo": {
            fontSize: 'inherit',
            color: 'inherit',
            lineHeight: 'inherit',
            fontWeight: 'inherit',
        },
        ".limitWidth": {
            maxWidth: theme.variable.maxWidth,
            margin: 'auto',
        },
    },
    toolbar: {
        marginBottom: theme.spacing.unit * 4,
    },
});
