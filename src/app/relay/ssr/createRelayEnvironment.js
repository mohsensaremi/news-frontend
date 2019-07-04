import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import {fetchFnClient,fetchFnServer} from '../environment/fetchData';

let relayEnvironment = null;

export default function initEnvironment ({ records = {} } = {}) {
    // Create a network layer from the fetch function
    const store = new Store(new RecordSource(records));

    // Make sure to create a new Relay environment for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (!process.browser) {
        const network = Network.create(fetchFnServer);
        return new Environment({
            network,
            store
        })
    }

    // reuse Relay environment on client-side
    if (!relayEnvironment) {
        const network = Network.create(fetchFnClient);
        relayEnvironment = new Environment({
            network,
            store
        })
    }

    return relayEnvironment
}
