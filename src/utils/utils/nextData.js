let data = {};
try {
    const serializedState = document.getElementById('__NEXT_DATA__');
    data = JSON.parse(serializedState.innerHTML)
} catch (e) {
}

export default data;
