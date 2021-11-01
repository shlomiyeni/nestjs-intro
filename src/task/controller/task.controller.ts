import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import CreateTaskDto from './dto/create.task.dto';
import TaskService from '../manager/task.service';

@Controller('tasks')
export default class TaskController {
  constructor(readonly taskService: TaskService) {}

  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    return `get task by id: ${id}`;
  }

  @Get()
  async getTasks() {
    return this.taskService.getTasks();
  }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    return 'create task';
  }
}
