import React from 'react';
import Map from 'app/packages/map/src/containers/Map';
import BaseLayout from 'app/layouts/BaseLayout';
import query from "app/packages/map/src/queries/MapRegion";
import query2 from "app/packages/map/src/queries/MapRegionLikesCount";
import query3 from "app/packages/map/src/queries/MapRouteLikesCount";
import withData from "app/relay/ssr/withData";
import Head from './Head';

const MapPage = () => {

    return (
        <React.Fragment>
            <Head/>
            <BaseLayout>
                <Map/>
            </BaseLayout>
        </React.Fragment>
    );
};

MapPage.getInitialProps = async (ctx) => {
    const relayVariables = [];

    if (ctx.query.region) {
        relayVariables.push({
            region: ctx.query.region,
        }, null, {
            link: ctx.query.region,
        });
    } else if (ctx.query.route) {
        const [originLink, destinationLink] = ctx.query.route.split('-to-');
        if (originLink && destinationLink) {
            relayVariables.push({
                region: originLink,
            }, {
                region: destinationLink,
            }, null, {
                origin: originLink,
                destination: destinationLink,
            });
        } else {
            ctx.res.statusCode = 404;
            ctx.res.end('Not found');
            return;
        }
    }

    return {
        relayVariables,
    };
};

export default withData(MapPage, {
    query: [
        query, query, query2, query3,
    ],
    abort404: [
        (props) => props.locationByLink === null,
        (props) => props.locationByLink === null,
    ],
});
