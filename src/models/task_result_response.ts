export interface TaskResultResponse {
  id: string;
  right: number;
  left: number;
}

// Correct
// {
//   "id": "ef82b46a-00bc-44d1-a2ce-48bc0fe7893e",
//   "result": 4396876996469632
// }
// response: Correct


// Incorrect
// {
//   "id": "ef82b46a-00bc-44d1-a2ce-48bc0fe7893e",
//   "result": 10
// }
// response: Incorrect result.