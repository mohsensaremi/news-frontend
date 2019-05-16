import React from 'react';
import PropTypes from 'prop-types';
import Design2 from 'app/packages/news-design/src/containers/Design2';

const RelatedNews = (props) => {
    const {
        classes,
        edges
    } = props;

    return (
        <div className={classes.root}>
            {
                edges.map(({node}) => {
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
