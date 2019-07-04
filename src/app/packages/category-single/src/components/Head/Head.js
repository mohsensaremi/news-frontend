import React from 'react';
import sanitizeHtml from 'sanitize-html';
import SeoSchema from 'utils/components/SeoSchema';
import DocHead from 'next/head';
import {getMetaTagsJsx} from "utils/utils/metaTags";

const Head = (props) => {
    const {
        router,
        data,
    } = props;

    const fullUrl = `${process.env.PUBLIC_URL}${router.asPath}`;

    const title = `اخبار ${data.title}`;

    const schema = {
        "@context": "http://schema.org",
        "@type": "CollectionPage",
        "@id": fullUrl,
        "url": fullUrl,
        "name": title,
        "description": title,
        "keywords": title,
    };

    const metaTags = {
        "keywords": {
            key: "keywords",
            property: "keywords",
            content: title,
        },
        "description": {
            key: "description",
            property: "description",
            content: title,
        },
        "og:title": {
            key: "og:title",
            property: "og:title",
            content: title,
        },
        "og:description": {
            key: "og:description",
            property: "og:description",
            content: title,
        },
    };

    return (
        <DocHead>
            <title>{`${title} − خبرجو`}</title>
            {
                getMetaTagsJsx(metaTags)
            }
            <SeoSchema
                schema={schema}
            />
        </DocHead>
    );
};

export default Head;
