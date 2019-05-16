import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {
        '& a:last-child $news': {
            marginBottom: 0,
        },
    },
    rootLoading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 410,
    },
    news: {
        marginBottom: theme.spacing.unit,
        borderRadius: theme.shape.borderRadiusButton,
        transition: theme.variables.transition,
        '&:hover': {
            boxShadow: theme.shadows[3],
        }
    },
}), {flip: false});
