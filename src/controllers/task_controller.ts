import Router from 'koa-router';
import TaskService from '../services/task_service';
import TaskDao from '../repositories/task_dao';
import TaskAdapter from '../adapters/task_adapter';

const router = new Router();

const taskService = new TaskService(new TaskDao(), new TaskAdapter());


router.get('/', async (ctx) => {
  taskService.findAll().then(data => {
    ctx.body = data;
  });
});

router.post('/', async (ctx) => {
  taskService.getAndSave().then(data => {
    ctx.body = data;
  });
});


export { router };
 
