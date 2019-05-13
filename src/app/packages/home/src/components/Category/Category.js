import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Category = (props) => {
    const {
        classes,
        title,
    } = props;

    return (
        <div className={classes.root}>
            <Typography variant={"h2"}>
                {title}
            </Typography>
        </div>
    );
};

Category.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Category;
