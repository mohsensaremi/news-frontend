import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import Design1 from "../Design1/Design1";

const Design2 = (props) => {
    const {
        classes,
        title,
        source,
        link,
        pubDate,
        category,
        showCategory,
    } = props;

    return (
        <Link to={link} target="_blank">
            <Paper className={classes.root}>
                <Typography className={classes.title}>
                    {title}
                </Typography>
                <div className={classes.footer}>
                    {
                        showCategory && (
                            <Typography variant="caption" className={classes.category}>
                                {category.title}
                            </Typography>
                        )
                    }
                    <Typography variant="caption" className={classes.sourceName}>
                        {source.title}
                    </Typography>
                    <Typography variant="caption" className={classes.sourceName}>
                        {pubDate}
                    </Typography>
                </div>
            </Paper>
        </Link>
    );
};

Design2.propTypes = {
    classes: PropTypes.object.isRequired,
};

Design1.defaultProps = {
    showCategory: false,
};

export default Design2;
