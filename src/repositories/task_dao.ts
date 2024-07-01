import { TaskResponse } from "../models/task_response";

let inMemoryData: TaskResponse[] = [];

export default class TaskDao {
  save(data : TaskResponse) {
    inMemoryData = [data, ...inMemoryData];
  }

  findAll(): Promise<TaskResponse[]> {
    return Promise.resolve(inMemoryData);
  }
}