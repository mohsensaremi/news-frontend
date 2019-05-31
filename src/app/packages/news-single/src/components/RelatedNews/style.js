import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {
        '& a:last-child $news': {
            marginBottom: 0,
        },
    },
    news: {
        marginBottom: theme.spacing.unit,
    },
}), {flip: false});
