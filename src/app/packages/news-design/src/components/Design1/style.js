import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {
        padding: theme.spacing(),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    info: {
        display: 'flex',
        alignItems: 'center',
    },
    title: {},
    sourceName: {
        color: theme.palette.text.secondary,
        minWidth: 64,
        textAlign: 'left',
    },
    pubDate: {
        color: theme.palette.text.secondary,
        minWidth: 128,
        textAlign: 'left',
    },
    category: {
        minWidth: 64,
        textAlign: 'left',
    },
}), {flip: false});
