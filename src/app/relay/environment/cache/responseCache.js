import RelayQueryResponseCache from "relay-runtime/lib/RelayQueryResponseCache";

const ttl = 5 * 60 * 1000;
const cache = new RelayQueryResponseCache({size: 250, ttl});

let serverStore = [];
try {
    serverStore = JSON.parse(document.getElementById('relayStore').innerHTML)
} catch (e) {
}

serverStore.forEach(item => {
    cache.set(item.id, item.variables, item.value);
});


export default cache;
