import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    buttonIcon: {
        marginRight: 4,
    },
    list: {
        marginBottom: theme.spacing.unit * 3,
    },
    buttonWrapper: {
        textAlign: 'center',
    },
}), {flip: false});
