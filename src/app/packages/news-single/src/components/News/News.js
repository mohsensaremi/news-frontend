import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const News = (props) => {
    const {
        classes,
        data,
    } = props;

    return (
        <div className={'limitWidth'}>
            <div className={classes.root}>
                <Grid container spacing={16}>
                    <Grid item xs={12} md={9}>
                        main
                    </Grid>
                    <Grid item xs={12} md={3}>
                        sidebar
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

News.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default News;
