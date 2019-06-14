import * as NewsController from 'app/controllers/NewsController';
import * as HomeController from 'app/controllers/HomeController';
import * as SitemapContorller from 'app/controllers/SitemapContorller';
import Router from "koa-router";

const router = new Router();

router.get('/news/:id', NewsController.single);
router.get('/sitemap', SitemapContorller.index);
router.get('/sitemap/:page', SitemapContorller.page);
router.get('/store-auth-token', HomeController.storeAuthToken);
router.get('/', HomeController.index);

export default router;
