const fetchData = (body) => {

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    if (typeof window !== "undefined") {
        const authorization = window.localStorage.getItem('userToken');
        if (authorization) {
            headers.authorization = `Bearer ${authorization}`;
        }
    }

    return fetch(process.env.REACT_APP_GRAPHQL_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
    }).then(response => {
        const newToken = response.headers.get('x-authorization-updated');
        if (newToken) {
            window.localStorage.setItem('userToken', newToken);
        }
        return response.json()
    });
};

export default fetchData;
