async function storeAuthToken(req, res) {
    const {token} = req.query;
    res.send(`
    <script type="application/javascript">
    window.localStorage.setItem('userToken',"${token}");
    window.location.href="/";
</script>
    `.trim());
}

module.exports = {
    storeAuthToken,
};