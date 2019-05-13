import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import NewsDesign1 from 'app/packages/news-design/src/containers/Design1';

const Category = (props) => {
    const {
        classes,
        title,
        news,
    } = props;

    return (
        <div className={classes.root}>
            <div className={classes.titleWrapper}>
                <Typography variant={"h2"} className={classes.title}>
                    {title}
                </Typography>
            </div>
            {
                news.edges.map(({node}) => {

                    return (
                        <NewsDesign1
                            classes={{root:classes.news}}
                            key={node.id}
                            data={node}
                        />
                    );
                })
            }
        </div>
    );
};

Category.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Category;
