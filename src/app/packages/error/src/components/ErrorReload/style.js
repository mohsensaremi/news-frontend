import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        color: theme.palette.primary.main,
        cursor: 'pointer',
    },
    text: {
        color: theme.palette.text.secondary,
        marginLeft: 4,
    }
}), {flip: false});
