import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {
        '& a:last-child $news': {
            marginBottom: 0,
        },
    },
    title: {
        marginBottom: theme.spacing.unit,
        paddingBottom: theme.spacing.unit / 2,
        display: 'inline-block',
        borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
    news: {
        marginBottom: theme.spacing.unit,
    },
}), {flip: false});
