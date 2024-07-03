import TaskDao from '../repositories/task_dao';
import TaskAdapter from '../adapters/task_adapter';
import { ResolvedTask } from '../models/resolved_task';
import { ValidatedTask } from '../models/validated_task';
import { Operation } from '../models/operation';

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

  async findAll(): Promise<ValidatedTask[]>{
    return this.taskRepository.findAll();
  }

  async calculateAndVerify() : Promise<ValidatedTask> {
    const calculationTask = await this.taskAdapter.getTask();

    const result: number = this.calculator(calculationTask.operation,calculationTask.left, calculationTask.right);

    const resolvedTask: ResolvedTask = {id: calculationTask.id, result: result};

    const [success, message] = await this.taskAdapter.postSolution(resolvedTask);

    const validatedTask: ValidatedTask = {id: calculationTask.id, 
                                left: calculationTask.left, 
                                right: calculationTask.right, 
                                operation: calculationTask.operation, 
                                result: result, 
                                validationStatus: success,
                                reason: message};

    this.taskRepository.save(validatedTask);
    return validatedTask;
  }

  calculator(operation: Operation, left: number, right: number): number {
    switch(operation) {
      case 'addition': return left+right;
      case 'subtraction': return left-right;
      case 'multiplication': return left*right;
      case 'division': return left/right;
      case 'remainder': return left%right;
    }
  }
}