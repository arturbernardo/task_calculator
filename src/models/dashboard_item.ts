import { Operation } from './operation';

export class DashBoardItem {
  id: string;
  right: number;
  left: number;
  operation: Operation;
  result: number;
  validationStatus: string;

  constructor(id: string, right: number, left: number, operation: Operation, result: number, validationStatus: string) {
    this.id = id;
    this.right = right;
    this.left = left;
    this.operation = operation;
    this.result = result;
    this.validationStatus = validationStatus;
  }
}