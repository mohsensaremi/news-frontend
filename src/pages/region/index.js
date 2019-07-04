import React from 'react';
import Region from 'app/packages/region/src/renderers/Region';
import query from 'app/packages/region/src/renderers/Region/RegionRegionQuery';
import query3 from 'app/packages/region/src/renderers/Region/RegionFilterPostQuery';
import query2 from 'app/packages/filter-options/src/renderers/PostsList/FilterOptionsPostsListQuery';
import withData from 'app/relay/ssr/withData';
import MainLayout from 'app/layouts/MainLayout';
import {actions} from 'packages/global-state';
import pick from "lodash/pick";

const RegionPage = (props) => {
    const {
        relayVariables,
    } = props;

    return (
        <MainLayout>
            <Region
                relayVariables={relayVariables[0]}
            />
        </MainLayout>
    );
};

RegionPage.getInitialProps = async (ctx) => {

    const relayVariables = [
        {
            region: ctx.query.region,
        },
    ];

    if (ctx.query.filters && (
        ctx.query.filters.indexOf("gb") >= 0 ||
        ctx.query.filters.indexOf("gc") >= 0
    )) {
        relayVariables.push({
            region: ctx.query.region,
            filters: ctx.query.filters,
            first: 10,
        });
        if (!process.browser) {
            relayVariables.push({
                link: `region/${ctx.query.region}/filter/${ctx.query.filters}`,
            });
        }
    }

    return {
        relayVariables,
    };
};

export default withData(RegionPage, {
    query: [
        query,
        query2,
        query3,
    ],
    abort404: [
        (props) => props.locationByLink === null
    ],
    onSuccess: [
        (props, ctx) => {
            if (!process.browser) {
                ctx.reduxStore.dispatch(actions.set('region', pick(props.locationByLink, ['title'])))
            }
        },
        null,
        (props, ctx) => {
            if (!process.browser && props.postByLink) {
                ctx.reduxStore.dispatch(actions.set('filteredPostPage', {
                    ...props.postByLink,
                    title: props.postByLink.title.primary,
                    filter: ctx.query.filters,
                    region: ctx.query.region,
                }))
            }
        },
    ],
});
