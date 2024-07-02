import { DashBoardItem } from "../models/dashboard_item";

let inMemoryData: DashBoardItem[] = [];

export default class TaskDao {
  save(data : DashBoardItem) {
    inMemoryData = [data, ...inMemoryData];
  }

  findAll(): Promise<DashBoardItem[]> {
    return Promise.resolve(inMemoryData);
  }
}