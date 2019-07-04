import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheets} from '@material-ui/styles';
import theme from 'app/themes/theme1';
import {supportWebP} from 'util/util/image';
import pick from 'lodash/pick';

class MyDocument extends Document {
    render() {
        const buildId = process.env.buildId;

        const preloadFonts = [
            `font_black_${buildId}.woff2`,
            `font_bold_${buildId}.woff2`,
            `font_medium_${buildId}.woff2`,
        ];

        return (
            <html lang="fa" dir="rtl">
            <Head>
                <meta charSet="utf-8"/>
                {/* Use minimum-scale=1 to enable GPU rasterization */}
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
                {/* PWA primary color */}
                <meta name="theme-color" content={theme.palette.primary.main}/>

                <meta name="storage-cache-version" content={process.env.STORAGE_CACHE_VERSION}/>
                <meta name="now" content={new Date()}/>
                {
                    preloadFonts.map(font => (
                        <link
                            key={font}
                            rel="preload"
                            href={`${process.env.CDN_URL}/_next/static/files/${font}`} as="font"
                            crossOrigin="anonymous"
                        />
                    ))
                }
            </Head>
            <body>
            <Main/>
            <NextScript/>
            <script
                type="application/json"
                id="SERVER_DATA"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(pick(this.props, [
                        'ua',
                        'webpSupport',
                    ]))
                }}
            />
            </body>
            </html>
        );
    }
}

MyDocument.getInitialProps = async ctx => {

    const ua = ctx.req
        ? ctx.req.headers['user-agent']
        : navigator.userAgent;

    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: App => props => sheets.collect(<App
                {...props}
                ua={ua}
                url={`${process.env.APP_URL}${ctx.req.url}`}
            />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: (
            <React.Fragment>
                {initialProps.styles}
                {sheets.getStyleElement()}
            </React.Fragment>
        ),
        ua,
    };
};

export default MyDocument;
