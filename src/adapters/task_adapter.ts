import axios from "axios";
import { TaskResponse } from "../models/task_response";
import config from '../configs/config';

let URL = config.MATH_URL;

export default class TaskAdapter {
    async get() : Promise<TaskResponse> {
      const api = axios.create({
        baseURL: URL,
      });

      const result = await api.get<TaskResponse>("/people/1");
      return result.data;
    }
  }