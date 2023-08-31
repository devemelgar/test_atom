import { Router } from 'express';

import TaskController from '../controllers/task.controller';

const router: Router = Router();

const { getTasks, postTasks, putTasks, deleteTasks } = TaskController;

router.get('/', [], getTasks);

router.post('/', [], postTasks);

router.put('/:taskId', [], putTasks);

router.delete('/:taskId', [], deleteTasks);

export default router;
