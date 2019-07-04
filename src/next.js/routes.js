const routes = require('next-routes');

module.exports = routes()
    .add('home', '/')
    .add('news-single', '/news/:id')

;
