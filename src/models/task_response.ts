export type Operation = 
                        "addition" 
                        | "subtraction" 
                        | "multiplication" 
                        | "division" 
                        | "remainder";

export interface TaskResponse {
  id: string;
  operation: Operation;
  right: number;
  left: number;
}