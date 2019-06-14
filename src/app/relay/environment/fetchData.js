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
        const jsonPromise = response.json();
        return jsonPromise.then(json => {

            if (Array.isArray(json.errors) && json.errors.length > 0) {
                if (json.errors[0].extensions.code === "UNAUTHENTICATED" && json.errors[0].message === "jwt expired") {
                    return fetch(process.env.REACT_APP_GRAPHQL_URL, {
                        method: 'POST',
                        headers,
                        body: JSON.stringify({
                            query: 'mutation RefreshToken { refreshToken { result { success } token } }'
                        }),
                    }).then((res) => {
                        return res.json()
                    }).then(res => {
                        if (res.data && res.data.refreshToken && res.data.refreshToken.token) {
                            window.localStorage.setItem('userToken', res.data.refreshToken.token);
                            return fetchData(body);
                        }
                        window.localStorage.removeItem('userToken');
                        return Promise.resolve(res);
                    });
                }
            }

            return jsonPromise;
        });
    });
};

export default fetchData;
