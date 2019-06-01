import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {
        maxWidth: theme.variables.maxWidth2,
        margin: 'auto',
    },
    title: {
        marginBottom: theme.spacing.unit * 2,
        color: theme.palette.primary.main,
        textAlign: 'center',
    },
}), {flip: false});
