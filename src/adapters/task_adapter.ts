import axios from 'axios';
import { TaskResponse } from '../models/task_response';
import { TaskCalculatedRequest } from '../models/task_calculated_request';
import config from '../configs/config';

const api = axios.create({
  baseURL: config.TASK_URL,
});

export default class TaskAdapter {
  async get() : Promise<TaskResponse> {
    const result = await api.get<TaskResponse>('/v1/get-task');
    return result.data;
  }

  async post(request : TaskCalculatedRequest) : Promise<string> {
    try {
      console.log(request);
      const result = await api.post<string>('/v1/submit-task', request);
      console.log(`RESULT: {result.status} - {result.data}`);
      return result.data; 
    } 
    catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  }
}
