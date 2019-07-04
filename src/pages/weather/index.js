import React from 'react';
import Weather from 'app/packages/weather/src/renderers/Weather';
import query from 'app/packages/weather/src/renderers/Weather/WeatherMain';
import withData from "../../app/relay/ssr/withData";
import MainLayout from 'app/layouts/MainLayout';

const WeatherPage = (props) => {

    const {
        relayVariables
    } = props;

    return (
        <MainLayout>
            <Weather
                relayVariables={relayVariables}
            />
        </MainLayout>
    );
};

WeatherPage.getInitialProps = async (ctx) => {


    return {
        relayVariables: {
            region: ctx.query.region
        }
    };
};

export default withData(WeatherPage, {
    query: [query],
    abort404: [
        (props) => {
            return props.locationByLink === null;
        }
    ],
});
