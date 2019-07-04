const dotenv = require('dotenv');
const express = require('express');
const UAParser = require('ua-parser-js');
const next = require('next');
const compression = require('compression');
const routes = require('./routes');

dotenv.config();
dotenv.config({
    path: '.env.server',
});

const redis = require("./redis");
const redisUtils = require("./utils/redis");

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev, dir: `${__dirname}/..`});
const handle = routes.getRequestHandler(app);

redisUtils.deleteByPattern(redis, "*").then(() => {
    console.log("REDIS CACHE PURGED");

    app.prepare().then(() => {
        const server = express();

        server.use(express.static(`${__dirname}/../../../public`));

        server.get('/_next/*', (req, res) => {
            /* serving _next static content using next.js handler */
            handle(req, res);
        });

        server.get('*', (req, res) => {
            /* serving page */
            return renderAndCache(req, res)
                .then(r => r)
                .catch(err => {
                    res.status(500);
                    res.send({error: err.message});
                });
        });


        /* starting server */
        server
            .use(compression())
            .listen(process.env.APP_PORT, (err) => {
                if (err) throw err;
                console.log(`> Ready on http://localhost:${process.env.APP_PORT}`)
            })
    });

});

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req) {
    const uaParser = new UAParser(req.headers['user-agent']);
    const isMobile = uaParser.getDevice().type === 'mobile';
    return `${req.path}:isMobile=${isMobile}`
}

async function renderAndCache(req, res) {
    const key = getCacheKey(req);
    const cacheValue = await redis.get(key);

    // If we have a page in the cache, let's serve it
    if (cacheValue && process.env.NODE_ENV === 'production') {
        res.setHeader('x-cache', 'HIT');
        res.send(cacheValue);
        return
    }

    // Match route + parse params
    const {route, params} = routes.match(req.url);
    if (!route) return handle(req, res);

    return app.renderToHTML(req, res, route.page, params)
        .then((html) => {
            redis.set(key, html, 'EX', process.env.CACHE_TTL).then(() => {
                res.setHeader('x-cache', 'MISS');
                res.send(html);
            });
        })
        .catch((err) => {
            app.renderError(err, req, res, route.page, params);
        })
}