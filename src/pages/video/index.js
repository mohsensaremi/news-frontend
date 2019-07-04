import React from 'react';
import Video from 'app/packages/video/src/renderers/Video';
import query from 'app/packages/video/src/renderers/Video/VideoVideoQuery';
import withData from 'app/relay/ssr/withData';
import MainLayout from 'app/layouts/MainLayout';

const VideoPage = (props) => {

    const {
        relayVariables
    } = props;

    return (
        <MainLayout>
            <Video relayVariables={relayVariables}/>
        </MainLayout>
    );
};

VideoPage.getInitialProps = async (ctx) => {

    return {
        relayVariables: {
            link: ctx.query.link,
        }
    };
};

export default withData(VideoPage, {
    query,
    abort404: [
        (props) => props.post === null
    ],
});
