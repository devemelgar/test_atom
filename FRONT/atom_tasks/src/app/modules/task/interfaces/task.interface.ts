export interface Task {
    id?: string,
    descripcion?: string;
    estado?: Estado,
}

export enum Estado {
    Pendiente = 'P',
    Completado = 'C',
}