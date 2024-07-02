import axios from "axios";
import { TaskResponse } from "../models/task_response";
import { TaskCalculatedRequest } from "../models/task_calculated_request";
import config from '../configs/config';

let URL = config.TASK_URL;

const api = axios.create({
  baseURL: URL,
});

export default class TaskAdapter {
    async get() : Promise<TaskResponse> {
      const result = await api.get<TaskResponse>("/v1/get-task");
      return result.data;
    }

    async post(request : TaskCalculatedRequest) : Promise<string> {
      try {
        console.log(request);
        const result = await api.post<string>("/v1/submit-task", request);
        console.log(`RESULT: {result.status} - {result.data}`);
        return result.data; 
      } 
      catch (error) {
        console.error('Error posting data:', error);
        throw error;
      }
    }
}

// 200 Success
// 400 Incorrect value in result; no ID specified; value is invalid     
// 404 Value not found for specified ID
// 503 Error communicating with database

// Resultados reais 
// 400 No task ID specified in body.
// 400 Incorrect result.