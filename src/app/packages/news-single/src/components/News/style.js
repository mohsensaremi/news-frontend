import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    title: {},
    date: {
        marginBottom: theme.spacing.unit * 2,
        textAlign: 'left',
    },
    image: {
        marginBottom: theme.spacing.unit,
        maxWidth: '100%',
        borderRadius: theme.shape.borderRadius,
    },
    content: {
        marginBottom: theme.spacing.unit,
        fontFamily: theme.typography.fontFamily,
        textAlign: 'justify',
        ...theme.typography.body1,
        '& *': {
            fontFamily: theme.typography.fontFamily,
            ...theme.typography.body1,
        },
    },
    bodyPaper: {
        padding: theme.spacing.unit * 2,
    },
    tagList: {
        marginBottom: theme.spacing.unit,
    },
    tagItem: {
        display: 'inline',
        color: theme.variables.linkColor,
        marginBottom: 4,
        marginLeft: 4,
        fontSize: 12,
    },
    source: {
    },
    sourceName: {
        marginRight: 4,
    },
}), {flip: false});
