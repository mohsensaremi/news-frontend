import React from 'react';
import sanitizeHtml from 'sanitize-html';
import SeoSchema from 'utils/components/SeoSchema';
import DocHead from 'next/head';
import {getMetaTagsJsx} from "utils/utils/metaTags";

const Head = (props) => {
    const {
        router,
        data:news,
    } = props;

    const fullUrl = `${process.env.PUBLIC_URL}${router.asPath}`;
    const abstractText = sanitizeHtml(news.abstract, {
        allowedTags: [],
    });
    const bodyText = sanitizeHtml(news.content, {
        allowedTags: [],
    });

    const publisher = {
        "@type": "Organization",
        "@id": news.source.url,
        "url": news.source.url,
        "name": news.source.title,
        "logo": news.source.logo,
    };

    const schema= {
        "@context": "http://schema.org",
            "@type": "NewsArticle",
            "@id": fullUrl,
            "url": fullUrl,
            "image": news.image,
            "articleBody": bodyText,
            "wordCount": bodyText.split('-').length,
            "sameAs": news.refUrl,
            "datePublished": news.pubDateISO,
            "dateModified": news.pubDateISO,
            "mainEntityOfPage": abstractText,
            "headline": news.title,
            "publisher": publisher,
            "author": publisher,
    };

    const metaTags = {
        "keywords":{
            key: "keywords",
            property: "keywords",
            content: news.metaKeywords,
        },
        "description":{
            key: "description",
            property: "description",
            content: news.metaDescription,
        },
        "og:title":{
            key: "og:title",
            property: "og:title",
            content: news.title,
        },
        "og:description":{
            key: "og:description",
            property: "og:description",
            content: news.metaDescription,
        },
    };

    return (
        <DocHead>
            <title>{`${news.title} − خبرجو`}</title>
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
