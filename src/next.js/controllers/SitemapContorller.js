const SitemapGenerator = require('sitemap');
const {request} = require("graphql-request");

async function index(req, res) {
    const query = `
    {
        newsSitemapPages
    }
    `;
    const {newsSitemapPages: pages} = await request(process.env.GRAPHQL_URL, query);
    const urls = [];
    for (let i = 0; i < pages; i++) {
        urls.push(`${process.env.PUBLIC_URL}/sitemap/${i + 1}`);
    }

    const sitemap = SitemapGenerator.buildSitemapIndex({
        urls,
    });

    res.set('Content-Type', 'application/xml');
    res.send(sitemap);
}

async function page(req, res) {
    let {page} = req.params;
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
    const {newsSitemap} = await request(process.env.GRAPHQL_URL, query);
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
        res.set('Content-Type', 'application/xml');
        res.send(xml);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }

}

module.exports = {
    index,
    page,
};
