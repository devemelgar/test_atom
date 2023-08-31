import DbConnection from '../config/db-connection';
import { DB_COLLECTION_TASK } from '../utils/constantes';

export default class DbValidators {
    static isExistsTask = async (taskId: string) => {
        const db = DbConnection.getConnection();
        const docRef = db.collection(DB_COLLECTION_TASK).doc(taskId);
        const docs = await docRef.get();

        if (!docs.exists) {
            throw new Error(`El task ${ taskId } no existe`);
        }
    };
}
