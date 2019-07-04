import React from 'react';
import App, {Container} from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from '@material-ui/styles';
import theme from 'app/themes/theme1';
import Boot from 'app/boot';
import {UserAgentProvider} from '@quentin-sommer/react-useragent';
import {WebpSupportProvider} from 'packages/webp-support';
import serverData from 'util/util/serverData';
import {withReduxStore} from 'app/redux';
import {Provider} from 'react-redux';
import {getMetaTagsJsx} from 'util/util/metaTags';

class MyApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const {Component, pageProps, reduxStore, url} = this.props;
        let ua = this.props.ua;
        if (!ua) {
            ua = serverData.ua;
        }

        return (
            <Container>
                <Head>
                    <title>خبرجو − آرشیو اخبار ایران و جهان</title>
                    {
                        getMetaTagsJsx({
                            "og:url": {
                                key: "og:url",
                                property: "og:url",
                                content: url,
                            },
                        })
                    }
                </Head>
                <UserAgentProvider ua={ua}>
                    <ThemeProvider theme={theme}>
                        <Provider store={reduxStore}>
                            <Boot>
                                <Component {...pageProps} />
                            </Boot>
                        </Provider>
                    </ThemeProvider>
                </UserAgentProvider>
            </Container>
        );
    }
}

export default withReduxStore(MyApp);
