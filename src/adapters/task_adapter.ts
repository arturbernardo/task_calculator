import axios from 'axios';
import { ArithmeticTask } from '../models/arithmetic_task';
import { ResolvedTask } from '../models/resolved_task';
import config from '../configs/config';

const api = axios.create({
  baseURL: config.TASK_URL,
});

export default class TaskAdapter {
  async getTask() : Promise<ArithmeticTask> {
    const result = await api.get<ArithmeticTask>('/v1/get-task');
    return result.data;
  }

  async postSolution(request : ResolvedTask) : Promise<string> {
    try {
      const result = await api.post<string>('/v1/submit-task', request);
      return result.data; 
    } 
    catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  }
}
