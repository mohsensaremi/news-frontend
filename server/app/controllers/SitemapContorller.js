import SitemapGenerator from 'sitemap';
import {request} from "graphql-request";

export async function index(ctx) {
    const query = `
    {
        newsSitemapPages
    }
    `;
    const {newsSitemapPages: pages} = await request(process.env.REACT_APP_GRAPHQL_URL, query);
    const urls = [];
    for (let i = 0; i < pages; i++) {
        urls.push(`${process.env.PUBLIC_URL}/sitemap/${i + 1}`);
    }

    const sitemap = SitemapGenerator.buildSitemapIndex({
        urls,
    });

    ctx.set('Content-Type', 'application/xml');
    ctx.body = sitemap;
}

export async function page(ctx) {
    let {page} = ctx.params;
    page = parseInt(page);

    const query = `
    {
        newsSitemap(page:${page}) {
            url
            lastmodISO
            changefreq
            priority
        }
    }
    `;
    const {newsSitemap} = await request(process.env.REACT_APP_GRAPHQL_URL, query);
    const sitemap = SitemapGenerator.createSitemap({
        hostname: process.env.PUBLIC_URL,
        urls: newsSitemap,
    });


    try {
        const xml = await new Promise(
            (resolve, reject) => {
                sitemap.toXML(function (err, xml) {
                    if (err) {
                        reject(err);
                        return;
                    }

                    resolve(xml);
                });
            }
        );
        ctx.set('Content-Type', 'application/xml');
        ctx.body = xml;
    } catch (err) {
        ctx.status = 500;
        ctx.body = err.message;
    }

}
