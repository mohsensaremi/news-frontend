import {request} from "graphql-request";
import {notFound, viewRenderer} from 'app/response';
import sanitizeHtml from 'sanitize-html';

export async function single(ctx) {
    const {id} = ctx.params;

    const query = `
    {
        newsById(id:"${id}") {
            title
            image
            content
            refUrl
            pubDateISO
            abstract
            source {
                title
                link
                logo
            }
        }
    }
    `;
    const data = await request(process.env.REACT_APP_GRAPHQL_URL, query);
    const {newsById: news} = data;
    if (news) {
        const fullUrl = `${process.env.PUBLIC_URL}${ctx.request.url}`;
        const abstractText = sanitizeHtml(news.abstract, {
            allowedTags: [],
        });
        const bodyText = sanitizeHtml(news.content, {
            allowedTags: [],
        });

        const publisher = {
            "@type": "Organization",
            "@id": news.source.link,
            "url": news.source.link,
            "name": news.source.title,
            "logo": news.source.logo,
        };

        return await viewRenderer(ctx, {
            title: news.title,
            // description: "BBB",
            // keywords: "XXX",
            seoSchema: {
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
            },
        });

    }

    return notFound(ctx);
}
