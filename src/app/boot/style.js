import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    '@global': {
        ".inheritTypo": {
            fontSize: 'inherit',
            color: 'inherit',
            lineHeight: 'inherit',
            fontWeight: 'inherit',
        },
        ".limitWidth2": {
            maxWidth: theme.variable.maxWidth2,
            margin: 'auto',
        },
        ".limitWidth3": {
            maxWidth: theme.variable.maxWidth3,
            margin: 'auto',
        },
    },
}), {flip: false});
