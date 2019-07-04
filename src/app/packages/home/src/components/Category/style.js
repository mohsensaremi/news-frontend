import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    titleWrapper: {},
    title: {
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        paddingLeft: theme.spacing(),
        display: 'inline-block',
        marginBottom: theme.spacing(1.5),
    },
}), {flip: false});
