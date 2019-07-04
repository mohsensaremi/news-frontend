import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Category from '../../containers/Category';

const Home = (props) => {
    const {
        classes,
        data,
    } = props;

    return (
        <div className={'limitWidth'}>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {
                        data.map(category => {
                            return (
                                <Grid item xs={12} md={6} key={category.id}>
                                    <Category data={category}/>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </div>
        </div>
    );
};

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Home;
