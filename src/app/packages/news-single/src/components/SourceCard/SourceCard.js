import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const SourceCard = (props) => {
    const {
        classes,
        title,
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
                <Grid container alignItems={"center"} justify={"space-between"}>
                    <Grid item>
                        <Typography className={classes.title} variant={"button"}>
                            {`خبرگزاری ${title}`}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            variant={"outlined"}
                            color={"primary"}
                            className={classes.button}
                        >
                            <AddIcon/>
                            دنبال کردن
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Paper>
    );
};

SourceCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default SourceCard;
