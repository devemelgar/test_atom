import { Timestamp } from 'firebase-admin/firestore';
import DbConnection from '../../config/db-connection';
import { DB_COLLECTION_TASK } from '../../utils/constantes';
import { ITask } from '../models/task.model';
import { EnumEstadoTask } from '../../utils/enums';

export default class TaskRepository {
    static async getAllTask() {
        const db = DbConnection.getConnection();
        const docRef = db.collection(DB_COLLECTION_TASK);

        const snapshot = await docRef.orderBy('estado').get();

        const arrayTask: ITask[] = snapshot.docs.map((doc) => {
            const { descripcion, estado, fechaRegistro } = doc.data();
            return {
                id: doc.id,
                descripcion,
                estado,
                fechaRegistro,
            };
        });

        return arrayTask;
    }

    static createTask(task: ITask) {
        const db = DbConnection.getConnection();
        const docRef = db.collection(DB_COLLECTION_TASK);

        task = {
            estado: EnumEstadoTask.ESTADO_TASK_PENDIENTE,
            fechaRegistro: Timestamp.fromDate(new Date()),
            ...task,
        };

        return docRef.add(task);
    }

    static updateTask(id: string, task: ITask) {
        const db = DbConnection.getConnection();
        const docRef = db.collection(DB_COLLECTION_TASK).doc(id);

        task = {
            descripcion: task.descripcion,
            estado: task.estado,
            fechaActualizacion: Timestamp.fromDate(new Date()),
        };

        return docRef.set(task, { merge: true });
    }

    static deleteTask(id: string) {
        const db = DbConnection.getConnection();
        const docRef = db.collection(DB_COLLECTION_TASK).doc(id);

        return docRef.delete();
    }
}
