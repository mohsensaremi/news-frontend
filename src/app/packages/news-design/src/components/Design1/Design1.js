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
        source,
        abstract,
        link,
        pubDate,
        showPubDate,
    } = props;

    return (
        <Tooltip title={abstract}>
            <Link to={link} target="_blank">
                <Paper className={classes.root}>
                    <Typography className={classes.title} noWrap>
                        {title}
                    </Typography>
                    <div className={classes.info}>
                        {
                            showPubDate && (
                                <Typography variant="caption" className={classes.pubDate}>
                                    {pubDate}
                                </Typography>
                            )
                        }
                        <Typography variant="caption" className={classes.sourceName}>
                            {source.title}
                        </Typography>
                    </div>
                </Paper>
            </Link>
        </Tooltip>
    );
};

Design1.propTypes = {
    classes: PropTypes.object.isRequired,
};

Design1.defaultProps = {
    showPubDate: false,
};

export default Design1;
