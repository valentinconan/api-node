import express from 'express';
import Logger from './utils/logger.js';
import MainRouter from './routes/mainRouter.js';
import cors from 'cors';

const LOGGER = Logger.getLogger('application');

export default class Application {
    constructor() {
        this.application = express();
        this.application.use(express.json());

        this.application.use(cors({
            origin: '',
            allowedHeaders: '*',
            methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS']
        }));

        this.application.use('/api', new MainRouter())
    }

    run(port) {
        this.application.listen(port, () => {
            LOGGER.info(`Server start on port ${port}`)
        });
    }
}