import { onRequest } from 'firebase-functions/v2/https';
import { setGlobalOptions } from 'firebase-functions/v2';
import * as logger from 'firebase-functions/logger';

import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import routerTask from './routes/task.routes';

export default class Server {
    public app: Application;

    constructor() {
        this.app = express();
    }

    static init() {
        return new Server();
    }

    start() {
        this.middleware();

        this.routes();

        setGlobalOptions({ maxInstances: 10 });

        logger.info('Servidor iniciado correctamente');

        return onRequest(this.app);
    }

    private middleware() {
        // Habilitar precision IP
        this.app.set('trust proxy', true);

        // Uso del cors
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Helmet - Seguridad
        this.app.use(helmet());
      }

      private routes() {
        this.app.use('/tasks', routerTask);
      }
}
