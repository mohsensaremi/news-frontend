import React from 'react';
import NewsPaginate from 'app/packages/news-list/src/containers/Paginate';
import NewsList from 'app/packages/news-list/src/components/List';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const Category = (props) => {

    const {
        classes,
        data,
        title,
        categoryId,
        topNews,
    } = props;

    return (
        <div className={classes.root}>
            <Typography variant={"h1"} className={classes.title}>
                {`اخبار ${title}`}
            </Typography>
            <Typography variant={"subtitle1"} className={classes.subtitle}>
                <TrendingUpIcon className={classes.subtitleIcon}/>
                {`داغ ترین اخبار ${title}`}
            </Typography>
            <NewsList
                data={topNews}
            />
            <Divider className={classes.divider}/>
            <NewsPaginate
                categoryId={categoryId}
                data={data}
            />
        </div>
    );
};

export default Category;
