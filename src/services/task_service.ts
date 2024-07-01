import TaskDao from "../repositories/task_dao";
import TaskAdapter from "../adapters/task_adapter";
import { TaskResponse } from "../models/task_response";

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

    async getAndSave() : Promise<TaskResponse> {
        const response = await this.taskAdapter.get();
        console.log(response);
        this.taskRepository.save(response);
        return response;
      }

    async findAll() {
        return await this.taskRepository.findAll();
      }
}