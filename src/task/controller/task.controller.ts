import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import CreateTaskDto from './dto/create.task.dto';
import UpdateTaskDto from './dto/update.task.dto';
import CreateTaskUsecase from '../manager/usecase/create.task.usecase';
import { getDate } from '../../lib/date.utils';
import GetTaskUsecase from '../manager/usecase/get.task.usecase';
import PartTimeApiGuard from '../../lib/guards/part.time.api.guard';
import { HttpExceptionFilter } from '../../lib/exception.filters/http-exception.filters';
import { AllExceptionsFilter } from '../../lib/exception.filters/all-exceptions.filters';
import { HttpAdapterHost } from '@nestjs/core';

//add to demonstrate specific http exception filter
//@UseFilters(HttpExceptionFilter)
//@UseFilters(AllExceptionsFilter)
@Controller('tasks')
export default class TaskController {
  constructor(
    private readonly createTaskUsecase: CreateTaskUsecase,
    private readonly getTaskUsecase: GetTaskUsecase,
  ) {}

  @Get(':id')
  async getTask(@Param('id', ParseIntPipe) id: number) {
    const result = await this.getTaskUsecase.get(id);
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  @Get()
  async getTasks() {
    return [];
  }

  @UseGuards(PartTimeApiGuard)
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
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    const result = await this.getTaskUsecase.get(id);

    if (!result) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `The task with ${id} did not found`,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return `updating task id: ${id}`;
  }
}
