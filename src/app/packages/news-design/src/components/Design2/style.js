import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {
        padding: theme.spacing.unit,
    },
    title: {
        fontWeight: 300,
    },
    sourceName: {
        color: theme.palette.text.secondary,
        minWidth: 64,
        fontWeight: 300,
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 4,
    },
}), {flip: false});
