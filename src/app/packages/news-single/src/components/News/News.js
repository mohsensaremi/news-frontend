import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import JsxRenderer from 'utils/components/JsxRenderer';
import {Link} from "react-router-dom";
import SourceCard from '../../containers/SourceCard';
import RelatedNews from '../../containers/RelatedNews';

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
    } = props;

    return (
        <div className={'limitWidth'}>
            <div className={classes.root}>
                <Grid container spacing={16}>
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
                                jsx={`<div className="${classes.content}">${content}</div>`}
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
                                                        component={Link}
                                                        to={`/tags/${tag}`}
                                                        target={"_blank"}
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
                                    inline
                                    color={"primary"}
                                >
                                    {source.title}
                                </Typography>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <SourceCard
                            data={data.source}
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
