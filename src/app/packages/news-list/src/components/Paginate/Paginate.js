import React from "react";
import PropTypes from "prop-types";
import List from '../../containers/List';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Paginate = (props) => {

    const {
        classes,
        data,
        onClickMore,
        loading,
        relay,
        ...otherProps
    } = props;

    return (
        <div className={classes.root}>
            <List
                data={data.news.edges}
                classes={{
                    root: classes.list,
                }}
                {...otherProps}
            />
            {
                relay.hasMore() && (
                    <div className={classes.buttonWrapper}>
                        <Button
                            onClick={onClickMore}
                            disabled={loading}
                            variant={"contained"}
                            color={"primary"}
                        >
                            بیشتر
                            <ExpandMoreIcon className={classes.buttonIcon}/>
                        </Button>
                    </div>
                )
            }
        </div>
    );
};

Paginate.propTypes = {
    classes: PropTypes.object.isRequired,
};

Paginate.defaultProps = {};

export default Paginate;
