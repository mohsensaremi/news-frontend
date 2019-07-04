const dotenv = require('dotenv');
const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

module.exports = withBundleAnalyzer(withCSS(withSASS({
    useFileSystemPublicRoutes: false,
    assetPrefix: process.env.CDN_URL,
    excludeFile: (str) => /.*next\.js.*/.test(str),
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {

        envKeys[`process.env.buildId`] = JSON.stringify(buildId);
        config.plugins.push(new webpack.DefinePlugin(envKeys));

        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|otf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: `[name]_${buildId}.[ext]`,
                    publicPath: `/_next/static/files`,
                    outputPath: 'static/files'
                }
            }
        });

        return config
    },
    analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
        server: {
            analyzerMode: 'static',
            reportFilename: 'bundles-analyzer/server.html'
        },
        browser: {
            analyzerMode: 'static',
            reportFilename: 'bundles-analyzer/client.html'
        }
    }
})));
