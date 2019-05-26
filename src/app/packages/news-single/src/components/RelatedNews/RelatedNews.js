import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Design2 from 'app/packages/news-design/src/containers/Design2';

const RelatedNews = (props) => {
    const {
        classes,
        news,
        title
    } = props;

    return (
        <div className={classes.root}>
            <Typography variant="subtitle1" className={classes.title}>
                {`آخرین اخبار ${title}`}
            </Typography>
            {
                news.edges.map(({node}) => {
                    return (
                        <Design2
                            key={node.id}
                            classes={{
                                root: classes.news,
                            }}
                            data={node}
                        />
                    );
                })
            }
        </div>
    );
};

RelatedNews.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default RelatedNews;
