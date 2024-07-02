import TaskDao from '../repositories/task_dao';
import TaskAdapter from '../adapters/task_adapter';
import { ArithmeticTask } from '../models/arithmetic_task';
import { ResolvedTask } from '../models/resolved_task';
import { ValidatedTask } from '../models/validated_task';
import { Operation } from '../models/operation';

function calculator(operation: Operation, left: number, right: number): number {
  switch(operation) {
    case 'addition': return left+right;
    case 'subtraction': return left-right;
    case 'multiplication': return left*right;
    case 'division': return left/right;
    case 'remainder': return left%right;
  }
}

export default class MathService {  
  private readonly taskRepository: TaskDao;
  private readonly taskAdapter: TaskAdapter;

  constructor(
    taskRepository: TaskDao,
    taskAdapter: TaskAdapter,
  ) {
    this.taskRepository = taskRepository;
    this.taskAdapter = taskAdapter;
  }

  async getTask() : Promise<ArithmeticTask> {
    const response = await this.taskAdapter.get();
    return response;
  }

  async findAll() {
    return await this.taskRepository.findAll();
  }

  async calculateAndVerify() : Promise<ValidatedTask> {
    const calculationTask = await this.taskAdapter.get();
    
    const result: number = calculator(calculationTask.operation,calculationTask.left, calculationTask.right);

    const resolvedTask: ResolvedTask = {id: calculationTask.id, result: result};

    const validationStatus: string = await this.taskAdapter.post(resolvedTask);

    const validatedTask: ValidatedTask = {id: calculationTask.id, 
                                left: calculationTask.left, 
                                right: calculationTask.right, 
                                operation: calculationTask.operation, 
                                result: result, 
                                validationStatus: validationStatus};

    this.taskRepository.save(validatedTask);
    return validatedTask;
  }
}