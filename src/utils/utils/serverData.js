let data = {};
try {
    const serializedState = document.getElementById('SERVER_DATA');
    data = JSON.parse(serializedState.innerHTML)
} catch (e) {
}

export default data;
