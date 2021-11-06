import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import CreateTaskDto from './dto/create.task.dto';
import UpdateTaskDto from './dto/update.task.dto';
import CreateTaskUsecase from '../manager/usecase/create.task.usecase';
import { getDate } from '../../lib/date.utils';
import GetTaskUsecase from '../manager/usecase/get.task.usecase';

@Controller('tasks')
export default class TaskController {
  constructor(
    private readonly createTaskUsecase: CreateTaskUsecase,
    private readonly getTaskUsecase: GetTaskUsecase,
  ) {}

  @Get(':id')
  async getTask(@Param('id', ParseIntPipe) id: number) {
    return this.getTaskUsecase.get(id);
  }

  @Get()
  async getTasks() {
    return [];
  }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.createTaskUsecase.create({
      id: null,
      assignee: createTaskDto.assignee,
      description: createTaskDto.description,
      owner: createTaskDto.owner,
      plannedEnd: getDate(createTaskDto.plannedEnd),
      priority: createTaskDto.priority,
      status: createTaskDto.status,
      title: createTaskDto.title,
    });
  }

  @Post()
  async createTasks(@Body() createTaskDto: CreateTaskDto[]) {
    return [];
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return `updating task id: ${id}`;
  }
}
