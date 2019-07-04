import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Link from 'utils/components/Link';

const Design1 = (props) => {
    const {
        classes,
        title,
        source,
        abstract,
        _id,
        pubDate,
        showPubDate,
        category,
        showCategory,
    } = props;

    return (
        <Tooltip title={abstract}>
            <Link route={"news-single"} params={{id:_id}} target="_blank">
                <Paper className={classes.root}>
                    <Typography className={classes.title} noWrap>
                        {title}
                    </Typography>
                    <div className={classes.info}>
                        {
                            showCategory && (
                                <Typography variant="caption" className={classes.category}>
                                    {category.title}
                                </Typography>
                            )
                        }
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
    showCategory: false,
};

export default Design1;
