import Router from 'koa-router';
import TaskService from '../services/task_service';
import TaskDao from '../repositories/task_dao';
import TaskAdapter from '../adapters/task_adapter';

const router = new Router();

const taskService = new TaskService(new TaskDao(), new TaskAdapter());

router.get('/', async (ctx) => {
  const data = await taskService.findAll();
  ctx.body = data;
});

router.post('/', async (ctx) => {
  const data = await taskService.getTask();
  ctx.body = data;
});

router.post('/calculateAndVerify', async (ctx) => {
  const data = await taskService.calculateAndVerify();
  ctx.body = data;
});

export { router };
 
