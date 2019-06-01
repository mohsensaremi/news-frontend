import React from "react";
import PropTypes from "prop-types";
import Hidden from '@material-ui/core/Hidden';
import NewsDesign1 from 'app/packages/news-design/src/containers/Design1';
import NewsDesign2 from 'app/packages/news-design/src/containers/Design2';

const List = (props) => {

    const {
        classes,
        data,
    } = props;

    return (
        <div className={classes.root}>
            {
                data.map(({node: item}) => {
                    return (
                        <React.Fragment
                            key={item.id}
                        >
                            <Hidden smDown>
                                <NewsDesign1
                                    data={item}
                                    showPubDate={true}
                                    classes={{
                                        root: classes.news,
                                    }}
                                />
                            </Hidden>
                            <Hidden mdUp>
                                <NewsDesign2
                                    data={item}
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

export default List;
