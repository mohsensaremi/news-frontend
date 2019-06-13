import * as NewsController from 'app/controllers/NewsController';
import * as HomeController from 'app/controllers/HomeController';
import Router from "koa-router";

const router = new Router();

router.get('/news/:id', NewsController.single);
router.get('/', HomeController.index);

export default router;
