import React from 'react';
import NewsPaginate from 'app/packages/news-list/src/containers/Paginate';
import Typography from "@material-ui/core/Typography";

const Category = (props) => {

    const {
        classes,
        data,
        title,
        categoryId,
    } = props;

    return (
        <div className={classes.root}>
            <Typography variant={"h1"} className={classes.title}>
                {`اخبار ${title}`}
            </Typography>
            <NewsPaginate
                categoryId={categoryId}
                data={data}
            />
        </div>
    );
};

export default Category;
