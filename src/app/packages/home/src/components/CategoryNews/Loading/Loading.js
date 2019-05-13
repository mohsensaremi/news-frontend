import React from 'react';
import classnames from 'classnames';
import CircularProgress from '@material-ui/core/CircularProgress';

const CategoryNews = (props) => {

    const {
        classes,
    } = props;

    return (
        <div className={classnames(classes.root, classes.rootLoading)}>
            <CircularProgress
                size={32}
            />
        </div>
    );
};

export default CategoryNews;
