import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CategoryNews from '../../renderers/CategoryNews';
import LazyLoad from 'react-lazyload';

const Category = (props) => {
    const {
        classes,
        title,
        id,
    } = props;

    return (
        <div className={classes.root}>
            <div className={classes.titleWrapper}>
                <Typography variant={"h2"} className={classes.title}>
                    {title}
                </Typography>
            </div>
            <LazyLoad once height={410}>
                <CategoryNews
                    categoryId={id}
                />
            </LazyLoad>
        </div>
    );
};

Category.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Category;
