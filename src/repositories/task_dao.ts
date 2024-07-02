import { ValidatedTask } from '../models/validated_task';

let inMemoryData: ValidatedTask[] = [];

export default class TaskDao {
  save(data : ValidatedTask) {
    inMemoryData = [data, ...inMemoryData];
  }

  findAll(): Promise<ValidatedTask[]> {
    return Promise.resolve(inMemoryData);
  }
}