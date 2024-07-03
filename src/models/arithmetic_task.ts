import { Operation } from './operation';

export type ArithmeticTask = {
  id: string;
  operation: Operation;
  right: number;
  left: number;
}