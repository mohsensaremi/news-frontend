import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {
        maxWidth: theme.variables.maxWidth2,
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            paddingRight: theme.spacing(2),
            paddingLeft: theme.spacing(2),
        },
    },
    title: {
        marginBottom: theme.spacing(2),
        color: theme.palette.primary.main,
        textAlign: 'center',
    },
    subtitle: {
        marginBottom: theme.spacing(),
        color: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
    },
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    subtitleIcon: {
        marginLeft: 4,
    },
}), {flip: false});
