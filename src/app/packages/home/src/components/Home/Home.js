import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const Home = (props) => {
    const {
        classes,
        data,
    } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                {
                    data.map(category=>{
                        return (
                            <Grid item xs={12} md={6} key={category.id}>

                            </Grid>
                        );
                    })
                }
            </Grid>
        </div>
    );
};

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Home;
