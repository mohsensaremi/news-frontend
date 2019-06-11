import * as NewsController from 'app/controllers/NewsController';
import Router from "koa-router";

const router = new Router();

router.get('/news/:id', NewsController.single);

export default router;
