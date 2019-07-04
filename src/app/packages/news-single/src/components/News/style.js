import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    title: {},
    date: {
        marginBottom: theme.spacing(),
        textAlign: 'left',
    },
    abstract: {
        marginBottom: theme.spacing(2),
    },
    image: {
        marginBottom: theme.spacing(),
        maxWidth: '100%',
        borderRadius: theme.shape.borderRadius,
    },
    content: {
        marginBottom: theme.spacing(),
        fontFamily: theme.typography.fontFamily,
        textAlign: 'justify',
        ...theme.typography.body1,
        '& *': {
            fontFamily: theme.typography.fontFamily,
            ...theme.typography.body1,
        },
    },
    bodyPaper: {
        padding: theme.spacing(2),
    },
    tagList: {
        marginBottom: theme.spacing(),
    },
    tagItem: {
        display: 'inline',
        color: theme.variables.linkColor,
        marginBottom: 4,
        marginLeft: 4,
        fontSize: 12,
    },
    source: {},
    sourceName: {
        marginRight: 4,
    },
    sidebarItem: {
        marginBottom: theme.spacing(2),
    },
}), {flip: false});
