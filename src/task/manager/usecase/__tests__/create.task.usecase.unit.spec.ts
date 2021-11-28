import CreateTaskUsecase from '../create.task.usecase';
import TaskRepository from '../../../repository/task.repository';
import UserEmailValidator from '../../../../shared/user.email.validator';
import GlobalService from '../../../../global/global.service';
import Task from '../../model/task';

describe('CatsController', () => {
  let createTaskUsecase: CreateTaskUsecase;
  let taskRepository: TaskRepository;
  let userEmailValidator: UserEmailValidator;
  let globalService: GlobalService;

  beforeEach(() => {
    taskRepository = new TaskRepository();
    userEmailValidator = new UserEmailValidator();
    globalService = new GlobalService();
    createTaskUsecase = new CreateTaskUsecase(
      taskRepository,
      userEmailValidator,
      globalService,
    );
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      jest
        .spyOn(userEmailValidator, 'validate')
        .mockImplementation(async () => true);

      const task: Task = {
        assignee: '',
        description: '',
        id: 0,
        owner: '',
        plannedEnd: undefined,
        priority: 0,
        status: '',
        title: '',
      };

      jest.spyOn(taskRepository, 'save').mockImplementation(async () => {
        task['id'] = 50;

        return task;
      });

      const taskedWithId = await createTaskUsecase.create(task);

      expect(taskedWithId.id).toBe(50);
    });
  });
});
