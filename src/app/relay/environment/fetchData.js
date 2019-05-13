const fetchData = (body) => {

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    if (typeof window !== "undefined") {
        const authorization = window.localStorage.getItem('membersAccessToken');
        if (authorization) {
            headers.authorization = `Bearer ${authorization}`;
        }
    }

    return fetch(process.env.GRAPHQL_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
    }).then(response => {
        return response.json()
    });
};

export default fetchData;
