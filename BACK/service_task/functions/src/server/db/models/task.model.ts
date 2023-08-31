import { Timestamp } from 'firebase-admin/firestore';
import { EnumEstadoTask } from '../../utils/enums';

export interface ITask {
    id?: string;
    descripcion: string;
    estado?: EnumEstadoTask;
    fechaRegistro?: Timestamp;
    fechaActualizacion?: Timestamp;
}
