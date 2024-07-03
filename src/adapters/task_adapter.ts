import axios from 'axios';
import { ArithmeticTask } from '../models/arithmetic_task';
import { ResolvedTask } from '../models/resolved_task';
import config from '../configs/config';
import { ApiResponse}  from '../models/api_response';

const api = axios.create({
  baseURL: config.TASK_URL,
});

export default class TaskAdapter {
  async getTask() : Promise<ArithmeticTask> {
    const result = await api.get<ArithmeticTask>('/v1/get-task');
    return result.data;
  }

  async postSolution(request : ResolvedTask) : Promise<ApiResponse> {
    try {
      const result = await api.post<string>('/v1/submit-task', request);
      return [true, result.data]; 
    } 
    catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Error status:', error.response.status);
          console.error('Error data:', error.response.data);
          return [false,  error.response.data];
        } else {
          console.error('Error', error.message);
          return [false, error.message];
        }
      } else {
        console.error('Unexpected error:', error);
        return [false,  "Unexpected"];
      }
    }
  }
}
