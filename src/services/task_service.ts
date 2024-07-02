import TaskDao from "../repositories/task_dao";
import TaskAdapter from "../adapters/task_adapter";
import { TaskResponse } from "../models/task_response";
import { TaskCalculatedRequest } from "../models/task_calculated_request";
import { DashBoardItem } from "../models/dashboard_item";

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
    
    // TODO - melhorar nomes dos objetos e variaveis. 
  
    let calculation = 0;
    if (calculationRequest.operation == "subtraction") {
      calculation = calculationRequest.left - calculationRequest.right
    }
    if (calculationRequest.operation == "addition") {
      calculation = calculationRequest.left + calculationRequest.right
    }
    if (calculationRequest.operation == "multiplication") {
      calculation = calculationRequest.left * calculationRequest.right
    }
    if (calculationRequest.operation == "division") {
      calculation = calculationRequest.left / calculationRequest.right
    }
    if (calculationRequest.operation == "remainder") {
      calculation = calculationRequest.left % calculationRequest.right
    }

    const calculatedRequest = new TaskCalculatedRequest(calculationRequest.id, calculation);

    const calculationResult = await this.taskAdapter.post(calculatedRequest);

    const item = new DashBoardItem(calculationRequest.id, calculationRequest.left, calculationRequest.right, calculationRequest.operation, calculation, calculationResult);

    this.taskRepository.save(item);
    return item;
  }
}