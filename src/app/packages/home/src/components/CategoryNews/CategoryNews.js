import React from 'react';
import NewsDesign1 from 'app/packages/news-design/src/containers/Design1';

const CategoryNews = (props) => {

    const {
        classes,
        news,
    } = props;

    return (
        <div className={classes.root}>
            {
                news.edges.map(({node}) => {
                    return (
                        <NewsDesign1
                            classes={{root: classes.news}}
                            key={node.id}
                            data={node}
                        />
                    );
                })
            }
        </div>
    );
};

export default CategoryNews;
