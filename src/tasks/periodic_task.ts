import config from '../configs/config';
import MathService from '../services/math_service';
import TaskDao from '../repositories/task_dao';
import TaskAdapter from '../adapters/task_adapter';

const mathService = new MathService(new TaskDao(), new TaskAdapter());

class PeriodicTask {
  private readonly POOLING = config.POOLING_MILLISECONDS;

  start() {
    setInterval(() => {
      this.executeTask();
    }, this.POOLING);
  }
  
    private executeTask() {
      mathService.calculateAndVerify();
      console.log('Task executed at', new Date().toLocaleTimeString());
    }
  }
  
  export default PeriodicTask;