import React from 'react';
import ThingsToDo from 'app/packages/things-to-do/src/renderers/ThingsToDo';
import query from 'app/packages/things-to-do/src/renderers/ThingsToDo/ThingsToDoQuery';
import withData from 'app/relay/ssr/withData';
import MainLayout from 'app/layouts/MainLayout';

const ThingsToDoPage = (props) => {

    const {
        relayVariables
    } = props;

    return (
        <MainLayout>
            <ThingsToDo relayVariables={relayVariables}/>
        </MainLayout>
    );
};

ThingsToDoPage.getInitialProps = async (ctx) => {

    return {
        relayVariables: {
            link: ctx.query.link,
        }
    };
};

export default withData(ThingsToDoPage, {
    query,
    abort404: [
        (props) => props.post === null
    ],
});
