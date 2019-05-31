import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    labelContainer: {
        padding: '6px 18px',
    },
    tab: {
        minWidth: 0,
        minHeight: 64,
    },
    primaryColorLabel: {
        color: theme.palette.primary.main,
    },
}), {flip: false});
