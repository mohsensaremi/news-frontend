import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import FollowCountProvider from 'app/packages/follow/src/renderers/FollowCountProvider';

const CategoryCard = (props) => {
    const {
        classes,
        title,
        _id,
        user,
        openAuthDialog,
    } = props;

    return (
        <Paper className={classes.root}>
            <div className={classes.top}/>
            <div className={classes.head}>
                <div className={classes.avatarBorderOuter}>
                    <div className={classes.avatarBorder}>
                    </div>
                </div>
            </div>
            <div className={classes.body}>
                <React.Fragment>
                    <Grid container alignItems={"center"} justify={"space-between"}>
                        <Grid item>
                            <Typography className={classes.title} variant={"button"}>
                                {`اخبار ${title}`}
                            </Typography>
                        </Grid>
                        <FollowCountProvider id={_id} type={"Category"}>
                            {
                                ({following, follow, unfollow, loading}) => (
                                    <Grid item>
                                        <Button
                                            variant={following ? "outlined" : "contained"}
                                            color={"primary"}
                                            className={classes.button}
                                            onClick={user ? (following ? unfollow : follow) : (() => openAuthDialog(follow))}
                                            disabled={loading}
                                        >
                                            <AddIcon/>
                                            {
                                                following ? "دنبال نکردن" : "دنبال کردن"
                                            }
                                        </Button>
                                    </Grid>
                                )
                            }
                        </FollowCountProvider>
                    </Grid>
                    <FollowCountProvider id={_id} type={"Category"}>
                        {
                            ({followsCount}) => (
                                followsCount > 0 && (
                                    <Typography variant={"caption"} className={classes.followsCount}>
                                        {`${followsCount} نفر اخبار ${title} را دنبال می ${followsCount === 1 ? "کند" : "کنند"}`}
                                    </Typography>
                                )
                            )
                        }
                    </FollowCountProvider>
                </React.Fragment>
            </div>
        </Paper>
    );
};

CategoryCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default CategoryCard;
