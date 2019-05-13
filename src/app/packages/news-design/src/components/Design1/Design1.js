import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';

const Design1 = (props) => {
    const {
        classes,
        title,
        sourceName,
        abstract,
    } = props;

    return (
        <Tooltip title={abstract}>
            <Paper className={classes.root}>
                <Typography className={classes.title} noWrap>
                    {title}
                </Typography>
                <Typography variant="caption" className={classes.sourceName}>
                    {sourceName}
                </Typography>
            </Paper>
        </Tooltip>
    );
};

Design1.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Design1;
