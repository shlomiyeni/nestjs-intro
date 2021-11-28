import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication, Scope } from '@nestjs/common';
import TaskController from '../task.controller';
import CreateTaskUsecase from '../../manager/usecase/create.task.usecase';
import GetTaskUsecase from '../../manager/usecase/get.task.usecase';
import TaskRepository from '../../repository/task.repository';
import UserEmailValidator from '../../../shared/user.email.validator';
import GlobalService from '../../../global/global.service';
import TestProvider from '../../manager/test.provider';
import SharedModule from '../../../shared/shared.module';
import Task from '../../manager/model/task';

describe('Tasks', () => {
  let app: INestApplication;
  const createTaskUsecase = { create: () => {} };
  const getTaskUsecase = {
    get: (id) => {
      return `task: ${id}`;
    },
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [
        CreateTaskUsecase,
        GetTaskUsecase,
        TaskRepository,
        UserEmailValidator,
        GlobalService,
        {
          provide: 'test-provider',
          useClass: TestProvider,
          scope: Scope.TRANSIENT,
        },
      ],
      imports: [SharedModule],
    })
      .overrideProvider(CreateTaskUsecase)
      .useClass(CreateTaskUsecase)
      .overrideProvider(GetTaskUsecase)
      .useClass(GetTaskUsecase)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET task`, async () => {
    //Aranage

    const task: Task = {
      id: undefined,
      assignee: '',
      description: '',
      owner: '',
      plannedEnd: null,
      priority: 0,
      status: '',
      title: '',
    };

    await request(app.getHttpServer()).post('/tasks').send(task);

    return request(app.getHttpServer()).get('/tasks/1').expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
