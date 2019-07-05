import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    active: {
        color: theme.palette.primary.main,
    },
}), {flip: false});
