import { Operation } from './operation';

export interface TaskResponse {
  id: string;
  operation: Operation;
  right: number;
  left: number;
}