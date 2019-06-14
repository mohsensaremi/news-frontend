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
    subtitle: {
        marginBottom: theme.spacing.unit,
        color: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
    },
    divider: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    subtitleIcon: {
        marginLeft: 4,
    },
}), {flip: false});
