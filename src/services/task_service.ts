import TaskDao from '../repositories/task_dao';
import TaskAdapter from '../adapters/task_adapter';
import { TaskResponse } from '../models/task_response';
import { TaskCalculatedRequest } from '../models/task_calculated_request';
import { DashBoardItem } from '../models/dashboard_item';

export default class TaskService {  
  private readonly taskRepository: TaskDao;
  private readonly taskAdapter: TaskAdapter;

  constructor(
    taskRepository: TaskDao,
    taskAdapter: TaskAdapter,
  ) {
    this.taskRepository = taskRepository;
    this.taskAdapter = taskAdapter;
  }

  async getTask() : Promise<TaskResponse> {
    const response = await this.taskAdapter.get();
    return response;
  }

  async findAll() {
    return await this.taskRepository.findAll();
  }

  async calculateAndVerify() : Promise<DashBoardItem> {
    const calculationRequest = await this.taskAdapter.get();
    
    const calculation = this.calculate(calculationRequest);

    const calculatedRequest : TaskCalculatedRequest = {id: calculationRequest.id, result: calculation};

    const calculationResult = await this.taskAdapter.post(calculatedRequest);

    const item = new DashBoardItem(calculationRequest.id, calculationRequest.left, calculationRequest.right, calculationRequest.operation, calculation, calculationResult);

    this.taskRepository.save(item);
    return item;
  }

  private calculate(calculationRequest: TaskResponse) : number {
    switch (calculationRequest.operation) {
      case 'addition':
        return calculationRequest.left + calculationRequest.right;
      case 'subtraction':
        return calculationRequest.left - calculationRequest.right;
      case 'division':
        return calculationRequest.left / calculationRequest.right;
      case 'multiplication':
        return calculationRequest.left * calculationRequest.right;
        case 'remainder':
          return calculationRequest.left % calculationRequest.right;
      default:
        throw new Error(`Invalid operation {calculationRequest.operation}`);
    }
  }
}