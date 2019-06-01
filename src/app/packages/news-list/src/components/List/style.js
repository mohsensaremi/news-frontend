import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {
        '& $news:last-child': {
            marginBottom: 0,
        },
    },
    news: {
        marginBottom: theme.spacing.unit * 2,
    },
}), {flip: false});
