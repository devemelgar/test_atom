import { Request, Response } from 'express';
import TaskRepository from '../db/repository/task.repository';

export default class TaskController {
    static async getTasks(req: Request, res: Response) {
        const resp = await TaskRepository.getAllTask();

        res.json({
            success: true,
            data: resp,
            message: 'Exito el metodo GET',
          });
    }

    static async postTasks(req: Request, res: Response) {
        const task = req.body;

        const resp = await TaskRepository.createTask(task);

        res.json({
            success: true,
            message: 'Exito el metodo POST ' + resp.id,
          });
    }

    static async putTasks(req: Request, res: Response) {
        const { taskId } = req.params;
        const task = req.body;

        const resp = await TaskRepository.updateTask(taskId, task);

        res.json({
            success: true,
            message: 'Exito el metodo PUT ' + resp.writeTime,
          });
    }

    static async deleteTasks(req: Request, res: Response) {
        const { taskId } = req.params;

        const resp = await TaskRepository.deleteTask(taskId);

        res.json({
            success: true,
            message: 'Exito el metodo DELETE ' + resp.writeTime,
          });
    }
}
