import React from "react";
import PropTypes from "prop-types";
import List from '../../containers/List';
import Button from '@material-ui/core/Button';

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
                {...otherProps}
            />
            {
                relay.hasMore() && (
                    <Button
                        onClick={onClickMore}
                        disabled={loading}
                    >
                        بیشتر
                    </Button>
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
