import { Operation } from "./operation";

export class DashBoardItem {
  id: string;
  right: number;
  left: number;
  operation: Operation;
  calculation: number;
  result: string;

  constructor(id: string, right: number, left: number, operation: Operation, calculation: number, result: string) {
    this.id = id;
    this.right = right;
    this.left = left;
    this.operation = operation;
    this.calculation = calculation;
    this.result = result;
  }
}