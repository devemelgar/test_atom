import { Router } from 'express';
import { check } from 'express-validator';

import TaskController from '../controllers/task.controller';
import DbValidators from '../helpers/db-validators';
import { validarCampos } from '../middleware/validar-campos';
import {
    ESTADO_TASK_COMPLETO,
    ESTADO_TASK_PENDIENTE,
} from '../utils/constantes';

const { getTasks, postTasks, putTasks, deleteTasks } = TaskController;
const { isExistsTask } = DbValidators;

const router: Router = Router();

router.get('/', [], getTasks);

router.post('/', [
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validarCampos,
], postTasks);

router.put('/:taskId', [
    check('taskId').custom(isExistsTask),
    check('estado',
    `El estado debe ser ${ESTADO_TASK_PENDIENTE} o ${ESTADO_TASK_COMPLETO}`)
    .isIn([ESTADO_TASK_PENDIENTE, ESTADO_TASK_COMPLETO]),
    validarCampos,
], putTasks);

router.delete('/:taskId', [
    check('taskId').custom(isExistsTask),
    validarCampos,
], deleteTasks);

export default router;
