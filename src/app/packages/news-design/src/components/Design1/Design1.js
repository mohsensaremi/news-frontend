import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import {Link} from 'react-router-dom';

const Design1 = (props) => {
    const {
        classes,
        title,
        sourceName,
        abstract,
        link,
    } = props;

    return (
        <Tooltip title={abstract}>
            <Link to={link} target="_blank">
                <Paper className={classes.root}>
                    <Typography className={classes.title} noWrap>
                        {title}
                    </Typography>
                    <Typography variant="caption" className={classes.sourceName}>
                        {sourceName}
                    </Typography>
                </Paper>
            </Link>
        </Tooltip>
    );
};

Design1.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Design1;
