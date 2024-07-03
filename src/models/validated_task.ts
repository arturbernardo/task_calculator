import { Operation } from './operation';

export type ValidatedTask = {
  id: string;
  right: number;
  left: number;
  operation: Operation;
  result: number;
  validationStatus: string;
}