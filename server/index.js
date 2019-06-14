import boot from 'bootstrap/index';
import Koa from 'koa';
import serve from 'koa-static';
import router from 'app/router';

boot().then(() => {
    const app = new Koa();

    app.use(router.routes())
        .use(router.allowedMethods())
        .use(serve(__dirname + './../build/'))
        .listen(process.env.APP_PORT, () => {
            console.log(`server listening on ${process.env.APP_PORT}`);
        });
});

