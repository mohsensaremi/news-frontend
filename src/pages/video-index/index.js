import React from 'react';
import VideoIndex from 'app/packages/blog-index/src/screens/Video';
import BlogLayout from 'app/layouts/BlogLayout';
import query from 'app/packages/blog-index/src/screens/Video/BlogIndexVideo';
import queryLayout from 'app/packages/blog-index/src/renderer/NavBar/BlogIndexNavBarQuery';
import withData from 'app/relay/ssr/withData';

const VideoIndexPage = (props) => {

    const {
        relayVariables
    } = props;

    return (
        <BlogLayout>
            <VideoIndex
                relayVariables={relayVariables[1]}
            />
        </BlogLayout>
    );
};

VideoIndexPage.getInitialProps = async () => {

    return {
        relayVariables: [
            {},
            {},
        ]
    };
};

export default withData(VideoIndexPage, {
    query: [queryLayout, query],
});
