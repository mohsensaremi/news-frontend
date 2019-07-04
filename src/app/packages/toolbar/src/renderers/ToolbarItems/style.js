import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    tab: {
        minWidth: 0,
        minHeight: 64,
        padding: '6px 12px',
    },
    primaryColorLabel: {
        color: theme.palette.primary.main,
    },
}), {flip: false});
