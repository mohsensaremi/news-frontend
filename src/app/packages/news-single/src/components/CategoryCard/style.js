import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {},
    top: {
        height: 60,
        backgroundColor: theme.palette.primary.main,
    },
    head: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarBorderOuter: {
        backgroundColor: '#fff',
        borderRadius: '50%',
        padding: 3,
        marginTop: -35,
        marginBottom: theme.spacing.unit * -2,
    },
    avatarBorder: {
        width: 64,
        height: 64,
        backgroundColor: '#fff',
        borderRadius: '50%',
        border: `1px solid ${theme.palette.divider}`,
    },
    body: {
        padding: theme.spacing.unit * 2,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    button: {
        padding: `2px ${theme.spacing.unit}px`,
    },
    followsCount: {
        marginTop: theme.spacing.unit / 2,
    },
}), {flip: false});
