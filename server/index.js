import 'bootstrap/index';
import Koa from 'koa';
import serve from 'koa-static';
import router from 'app/router';

const app = new Koa();

app.use(serve(__dirname + './../build/'))
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(process.env.APP_PORT, () => {
        console.log(`server listening on ${process.env.APP_PORT}`);
    });
