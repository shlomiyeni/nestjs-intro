import { Test, TestingModule } from '@nestjs/testing';
import CreateTaskUsecase from '../create.task.usecase'
import TaskController from '../../../controller/task.controller'
import GetTaskUsecase from '../get.task.usecase'
import TaskRepository from '../../../repository/task.repository'
import UserEmailValidator from '../../../../shared/user.email.validator'
import GlobalService from '../../../../global/global.service'
import TestProvider from '../../test.provider'
import {Scope} from '@nestjs/common'
import SharedModule from '../../../../shared/shared.module'
import Task from '../../model/task'

describe('AppController', () => {
    let createTaskUsecase: CreateTaskUsecase;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
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
        }).compile();

        createTaskUsecase = app.get<CreateTaskUsecase>(CreateTaskUsecase);
    });

    describe('root', () => {
        it('should return create task with valid id', async () => {

            const task: Task = {
                assignee: '',
                description: '',
                id: 0,
                owner: '',
                plannedEnd: undefined,
                priority: 0,
                status: '',
                title: ''
            }

            const createTask = await createTaskUsecase.create(task)

            expect(createTask.id).toBe(1);
        });
    });
});
