import React from 'react';
import {compose} from "recompose";
import {QueryRenderer} from 'react-relay';
import {objectToQueryStringSorted} from 'utils/utils/string';
import {withRelayServerData} from 'packages/relay-server-data-provider';

const SSRQueryRenderer = (props) => {

    const {
        relayServerData,
        ...otherProps
    } = props;

    if (!process.browser) {
        const varsStr = objectToQueryStringSorted(props.variables || {});
        const query = props.query();
        const key = `${query.operation.name}?${varsStr}`;
        const data = relayServerData && relayServerData[key];

        if (data) {
            return props.render({props: data});
        }
    }

    return (
        <QueryRenderer
            {...otherProps}
        />
    );

};

export default compose(
    withRelayServerData((store) => {
        return store;
    }),
)(SSRQueryRenderer);
