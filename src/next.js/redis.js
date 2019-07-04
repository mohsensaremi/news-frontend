const Redis = require('ioredis');

const config = {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT),
    keyPrefix: process.env.REDIS_PREFIX + ':',
};

if (process.env.REDIS_PASS && process.env.REDIS_PASS !== '') {
    config.password = process.env.REDIS_PASS;
}

const client = new Redis(config);

module.exports = client;
