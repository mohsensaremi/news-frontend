import React from "react";
import PropTypes from "prop-types";
import Hidden from '@material-ui/core/Hidden';
import NewsDesign1 from 'app/packages/news-design/src/containers/Design1';
import NewsDesign2 from 'app/packages/news-design/src/containers/Design2';

const List = (props) => {

    const {
        classes,
        data,
        useNode,
    } = props;

    return (
        <div className={classes.root}>
            {
                data.map((item) => {
                    item = useNode ? item.node : item;

                    return (
                        <React.Fragment
                            key={item.id}
                        >
                            <Hidden smDown>
                                <NewsDesign1
                                    data={item}
                                    showPubDate={true}
                                    showCategory={true}
                                    classes={{
                                        root: classes.news,
                                    }}
                                />
                            </Hidden>
                            <Hidden mdUp>
                                <NewsDesign2
                                    data={item}
                                    showCategory={true}
                                    classes={{
                                        root: classes.news,
                                    }}
                                />
                            </Hidden>

                        </React.Fragment>
                    );
                })
            }
        </div>
    );
};

List.propTypes = {
    classes: PropTypes.object.isRequired,
};

List.defaultProps = {
    useNode: false,
};

export default List;
