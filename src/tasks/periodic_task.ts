import config from '../configs/config';
import TaskService from '../services/task_service';
import TaskDao from '../repositories/task_dao';
import TaskAdapter from '../adapters/task_adapter';

const taskService = new TaskService(new TaskDao(), new TaskAdapter());

class PeriodicTask {
  private readonly POOLING = config.POOLING_MILLISECONDS;

  start() {
    setInterval(() => {
      this.executeTask();
    }, this.POOLING);
  }
  
    private executeTask() {
      taskService.calculateAndVerify();
      console.log('Task executed at', new Date().toLocaleTimeString());
    }
  }
  
  export default PeriodicTask;