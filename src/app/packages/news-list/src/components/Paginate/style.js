import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    buttonIcon: {
        marginRight: 4,
    },
    list: {
        marginBottom: theme.spacing(),
    },
    buttonWrapper: {
        textAlign: 'center',
    },
}), {flip: false});
