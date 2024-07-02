export class TaskCalculatedRequest {
  id: string;
  result: number;

  constructor(id: string, result: number) {
    this.id = id;
    this.result = result;
  }
}