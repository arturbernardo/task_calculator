import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx) => {
  await ctx.render('index.ejs', {x: 1, y: 2});
});

router.get('/about', async (ctx) => {
  ctx.body = 'This is the about page!';
});

export { router };
 
