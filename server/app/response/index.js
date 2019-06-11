import fs from 'fs-extra';
import Mustache from 'mustache';

const indexHtml = fs.readFileSync(`${__dirname}/../../../build/index.html`, 'utf8');

export async function viewRenderer(ctx, options) {
    const defaultOptions = {
        title: "news",
        metaTags: [
            {
                "http-equiv": "content-language",
                content: "fa",
            },
            {
                property: "og:title",
                content: options.title || "news",
            },
            {
                property: "og:description",
                content: options.description || "desc",
            },
            {
                property: "og:image",
                content: options.image || `${process.env.REACT_APP_CDN_URL}/img/aboutus-logo-bg.jpg`,
            },
            {
                property: "og:url",
                content: `${process.env.PUBLIC_URL}${ctx.request.url}`,
            },
            {
                property: "twitter:card",
                content: "summary_large_image",
            },
            {
                property: "og:site_name",
                content: "ogsitename",
            },
            {
                name: "twitter:image:alt",
                content: options.title || "twitter image alt",
            },
        ],
        metatagsprops: function () {
            return Object.entries(this).map(([key, value]) => `${key}=${value} `);
        },
    };

    if (options && Array.isArray(options.metaTags)) {
        defaultOptions.metaTags = [...defaultOptions.metaTags, options.metaTags];
    }

    options = {
        ...defaultOptions,
        ...options,
    };

    if (options.seoSchema) {
        options.seoSchema = JSON.stringify(options.seoSchema);
    }

    ctx.body = Mustache.render(indexHtml, options);
}


export async function notFound(ctx) {

}

export function defaultController(viewOptions) {
    return (ctx) => {
        return viewRenderer(ctx, viewOptions);
    };
}
