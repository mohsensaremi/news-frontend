import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    titleWrapper: {},
    title: {
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        paddingLeft: theme.spacing.unit,
        display: 'inline-block',
        marginBottom: theme.spacing.unit * 3 / 2,
    },
}), {flip: false});
