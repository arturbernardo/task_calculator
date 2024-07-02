import Router from 'koa-router';
import MathService from '../services/math_service';
import TaskDao from '../repositories/task_dao';
import TaskAdapter from '../adapters/task_adapter';

const router = new Router();

const mathService = new MathService(new TaskDao(), new TaskAdapter());

router.get('/', async (ctx) => {
  const data = await mathService.findAll();
  await ctx.render('index', {data: data});
});

export { router };