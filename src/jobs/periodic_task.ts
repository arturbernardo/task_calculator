import config from '../configs/config';
import MathService from '../services/math_service';
import TaskDao from '../repositories/task_dao';
import TaskAdapter from '../adapters/task_adapter';


export class PeriodicTask {
  private POOLING = config.POOLING_MILLISECONDS;
  private TO_MANY_REQ_DELAY = config.TO_MANY_REQ_DELAY;
  private intervalId: NodeJS.Timeout | null = null;

  mathService = new MathService(new TaskDao(), new TaskAdapter(this));

  start() {
    this.intervalId = setInterval(() => {
      this.executeTask();
    }, this.POOLING);
  }

  restart() {
    console.log(`adding delay, from ${this.POOLING}ms to ${this.POOLING + this.TO_MANY_REQ_DELAY}ms`);
    this.POOLING = this.POOLING + this.TO_MANY_REQ_DELAY;
    this.stopInterval();
    this.intervalId = setInterval(() => {
      this.executeTask();
    }, this.POOLING);
  }

  stopInterval() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  
  private executeTask() {
    this.mathService.calculateAndVerify();
    console.log('Task executed at', new Date().toLocaleTimeString());
  }
}
  
const job: PeriodicTask = new PeriodicTask();
export default job;