import React from 'react';
import SeoSchema from 'util/components/SeoSchema';
import {withRouter} from 'next/router';
import * as schemaUtil from 'util/util/seo-schema';
import DocHead from 'next/head';
import {getMetaTagsJsx} from "util/util/metaTags";
import {objectToQueryStringSorted} from "util/util/string";
import {withRelayServerData} from "packages/relay-server-data-provider";

const Head = ({router, relayServerData}) => {
    const {originResponse, destinationResponse, likesCountResponse} = relayServerData;
    const fullUrl = `${process.env.APP_URL}${router.asPath}`;

    if (originResponse && destinationResponse) {
        const origin = originResponse.locationByLink;
        const destination = destinationResponse.locationByLink;
        const title = `مسیر ${origin.title} به ${destination.title}  − کارناوال`;
        const description = `مسیر ${origin.title} ${destination.title},مسیر ${origin.title} به ${destination.title},مسافت ${origin.title} ${destination.title},راه های ${origin.title} ${destination.title},مسیریابی ${destination.title},مسیر ${origin.title} تا ${destination.title},فاصله ${origin.title} تا ${destination.title},زمان سفر ${origin.title} ${destination.title},وضعیت جاده ${origin.title} ${destination.title},نقشه شهر ${destination.title},بهترین مسیر ${origin.title} ${destination.title},کوتاه ترین مسیر ${origin.title} ${destination.title},`;
        const keywords = `مسیر ${origin.title} ${destination.title},مسیر ${origin.title} به ${destination.title},مسافت ${origin.title} ${destination.title},راه های ${origin.title} ${destination.title},مسیریابی ${destination.title},مسیر ${origin.title} تا ${destination.title},فاصله ${origin.title} تا ${destination.title},زمان سفر ${origin.title} ${destination.title},وضعیت جاده ${origin.title} ${destination.title},`;

        const schema = {
            '@context': 'http://schema.org',
            '@type': 'Map',
            '@id': fullUrl,
            'url': fullUrl,
            'name': title,
            'mapType': {
                '@type': 'MapCategoryType',
                'name': 'roadmap',
            },
            "description": description,
        };

        if (likesCountResponse) {
            schema.aggregateRating = schemaUtil.getAggregateRatingByLikes(likesCountResponse.routeLikesCount);
        }
        schema.contentLocation = schemaUtil.getPlaceHierarchy(destination);
        schema.provider = schemaUtil.getProvider();
        schema.offers = [
            ...schemaUtil.getPlaceOffers(destination),
        ];

        const metaTags = {
            "keywords": {
                key: "keywords",
                property: "keywords",
                content: keywords,
            },
            "description": {
                key: "description",
                property: "description",
                content: description,
            },
            "og:title": {
                key: "og:title",
                property: "og:title",
                content: title,
            },
            "og:description": {
                key: "og:description",
                property: "og:description",
                content: description,
            },
        };

        if (Array.isArray(destination.cover) && destination.cover.length > 0) {
            metaTags['og:image'] = {
                key: "og:image",
                property: "og:image",
                content: destination.cover[0].url,
            };
        }

        return (
            <DocHead>
                <title>{title}</title>
                {
                    getMetaTagsJsx(metaTags)
                }
                <SeoSchema
                    schema={schema}
                />
            </DocHead>
        );

    } else if (originResponse) {
        const {title, fullTitle} = originResponse.locationByLink;

        const pageTitle = `نقشه ${fullTitle} − کارناوال`;
        const description = `نقشه آنلاین ${title},نقشه ${title},مسیریابی ${title},نقشه راه های ${title},نقشه حیابان های ${title},نقشه ${fullTitle},نقشه مناطق ${title},فاصله تهران تا ${title},نقشه هوایی ${title},نقشه گردشگری ${fullTitle},${fullTitle} کجاست,دانلود نقشه ${title},`;
        const keywords = `نقشه آنلاین ${title},نقشه ${title},مسیریابی ${title},نقشه راه های ${title},نقشه خیابان های ${title},نقشه ${fullTitle},نقشه مناطق ${title},فاصله تهران تا ${title},نقشه هوایی ${title},`;

        const schema = {
            '@context': 'http://schema.org',
            '@type': 'Map',
            '@id': fullUrl,
            'url': fullUrl,
            'name': pageTitle,
            'mapType': {
                '@type': 'MapCategoryType',
                'name': 'roadmap',
            },
            "description": description,
        };

        if (likesCountResponse) {
            schema.aggregateRating = schemaUtil.getAggregateRatingByLikes(likesCountResponse.locationLikesCountByLink);
        }
        schema.contentLocation = schemaUtil.getPlaceHierarchy(originResponse.locationByLink);
        schema.provider = schemaUtil.getProvider();
        schema.offers = [
            ...schemaUtil.getPlaceOffers(originResponse.locationByLink),
        ];

        const metaTags = {
            "keywords": {
                key: "keywords",
                property: "keywords",
                content: keywords,
            },
            "description": {
                key: "description",
                property: "description",
                content: description,
            },
            "og:title": {
                key: "og:title",
                property: "og:title",
                content: pageTitle,
            },
            "og:description": {
                key: "og:description",
                property: "og:description",
                content: description,
            },
        };

        if (Array.isArray(originResponse.locationByLink.cover) && originResponse.locationByLink.cover.length > 0) {
            metaTags['og:image'] = {
                key: "og:image",
                property: "og:image",
                content: originResponse.locationByLink.cover[0].url,
            };
        }

        return (
            <DocHead>
                <title>{pageTitle}</title>
                {
                    getMetaTagsJsx(metaTags)
                }
                <SeoSchema
                    schema={schema}
                />
            </DocHead>
        );
    } else {
        const title = 'نقشه و مسیریابی آنلاین − کارناوال';
        const description = "نقشه آنلاین ایران,نقشه آنلاین جهان,نقشه تهران,مسیریابی آنلاین,نقشه راه های ایران,فاصله بین شهر ها,مسافت یاب بین شهر ها,دانلود نقشه ایران,نقشه شهر های ایران,مسیریابی تهران,مسیریاب آنلاین,نقشه آنلاین تهران,نقشه تهران گوگل,";
        const keywords = "نقشه آنلاین ایران,نقشه آنلاین جهان,نقشه تهران,مسیریابی آنلاین,نقشه راه های ایران,فاصله بین شهر ها,مسافت یاب بین شهر ها,";
        const schema = {
            '@context': 'http://schema.org',
            '@type': 'Map',
            '@id': fullUrl,
            'url': fullUrl,
            'name': title,
            'mapType': {
                '@type': 'MapCategoryType',
                'name': 'roadmap',
            },
            "description": description,
        };
        schema.provider = schemaUtil.getProvider();

        const metaTags = {
            "keywords": {
                key: "keywords",
                property: "keywords",
                content: keywords,
            },
            "description": {
                key: "description",
                property: "description",
                content: description,
            },
            "og:title": {
                key: "og:title",
                property: "og:title",
                content: title,
            },
            "og:description": {
                key: "og:description",
                property: "og:description",
                content: description,
            },
        };

        return (
            <DocHead>
                <title>{title}</title>
                {
                    getMetaTagsJsx(metaTags)
                }
                <SeoSchema
                    schema={schema}
                />
            </DocHead>
        );
    }

};

export default withRouter(withRelayServerData(
    (relayServerResponseCache, {router}) => {
        let origin = null;
        let destination = null;
        let originResponse = null;
        let destinationResponse = null;
        let likesCountResponse = null;


        if (router.query.region) {
            origin = router.query.region;
        } else if (router.query.route) {
            [origin, destination] = router.query.route.split('-to-');

        }
        if (origin) {
            if (relayServerResponseCache) {
                const keyOrigin = `MapRegionQuery?${objectToQueryStringSorted({region: origin})}`;
                const keyDestination = `MapRegionQuery?${objectToQueryStringSorted({region: destination})}`;
                const keyLikesCount = `MapRegionLikesCountQuery?${objectToQueryStringSorted({
                    link: origin,
                })}`;
                const keyLikesCount2 = `MapRouteLikesCountQuery?${objectToQueryStringSorted({
                    origin: origin,
                    destination: destination
                })}`;
                if (relayServerResponseCache[keyOrigin]) {
                    originResponse = relayServerResponseCache[keyOrigin];
                }
                if (relayServerResponseCache[keyDestination]) {
                    destinationResponse = relayServerResponseCache[keyDestination];
                }
                if (relayServerResponseCache[keyLikesCount]) {
                    likesCountResponse = relayServerResponseCache[keyLikesCount];
                }
                if (relayServerResponseCache[keyLikesCount2]) {
                    likesCountResponse = relayServerResponseCache[keyLikesCount2];
                }
            }
        }

        return {
            originResponse,
            destinationResponse,
            likesCountResponse,
        }
    },
)(Head));