import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import JsxRenderer from 'utils/components/JsxRenderer';
import {SetGlobalState} from 'packages/global-state';
import CategoryCard from '../../containers/CategoryCard';
import RelatedNews from '../../containers/RelatedNews';
import classnames from 'classnames';

const News = (props) => {
    const {
        classes,
        title,
        image,
        content,
        pubDate,
        refUrl,
        source,
        tagsTitle,
        abstract,
        // categoriesTitle,
        data,
        category,
    } = props;

    return (
        <div className={classnames('limitWidth', classes.limitWidth)}>
            <SetGlobalState
                itemKey={"activeMenu"}
                itemValue={category._id}
            />
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                        <Paper className={classes.bodyPaper}>
                            <Typography
                                component={"h1"}
                                variant={"h1"}
                                className={classes.title}
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant={"subtitle1"}
                                className={classes.date}
                                color="textSecondary"
                            >
                                {pubDate}
                            </Typography>
                            {
                                abstract && (
                                    <Typography
                                        variant={"subtitle1"}
                                        className={classes.abstract}
                                    >
                                        {abstract}
                                    </Typography>
                                )
                            }
                            <img
                                src={image}
                                className={classes.image}
                            />
                            <JsxRenderer
                                className={classes.content}
                                jsx={content}
                            />
                            {
                                tagsTitle.length > 0 && (
                                    <div className={classes.tagList}>
                                        {
                                            tagsTitle.map(tag => {

                                                return (
                                                    <Typography
                                                        key={tag}
                                                        variant={"body1"}
                                                        className={classes.tagItem}
                                                    >
                                                        {`#${tag}`}
                                                    </Typography>
                                                );
                                            })
                                        }
                                    </div>
                                )
                            }
                            <Typography
                                className={classes.source}
                                variant={"body1"}
                            >
                                منبع:
                                <Typography
                                    className={classes.sourceName}
                                    variant={"body1"}
                                    component={"a"}
                                    target={"_blank"}
                                    href={refUrl}
                                    display={"inline"}
                                    color={"primary"}
                                >
                                    {source.title}
                                </Typography>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CategoryCard
                            data={data.category}
                            classes={{root: classes.sidebarItem}}
                        />
                        <RelatedNews
                            data={data.category}
                            classes={{root: classes.sidebarItem}}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

News.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default News;
