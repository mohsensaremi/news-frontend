import React from 'react';
import NewsPaginateMyNews from 'app/packages/news-list/src/containers/PaginateMyNews';
import Typography from "@material-ui/core/Typography";

const MyNews = (props) => {

    const {
        classes,
        data,
    } = props;

    return (
        <div className={classes.root}>
            <Typography variant={"h1"} className={classes.title}>
                {`اخبار من`}
            </Typography>
            <NewsPaginateMyNews
                data={data}
            />
        </div>
    );
};

export default MyNews;
