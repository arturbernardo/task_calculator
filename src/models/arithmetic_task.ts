import { Operation } from './operation';

export interface ArithmeticTask {
  id: string;
  operation: Operation;
  right: number;
  left: number;
}