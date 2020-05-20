import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import compression from "compression";
import Routes from './Routes';

class App {
    public app : express.Application;

    constructor() {
        this.app = express();
        this.applyMiddlewares();
        this.routes();
    }

    private applyMiddlewares() {
        this.app.use(cors({ credentials: true, origin: true }));
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(compression());
    }

    private routes() {
        this.app.use("/", Routes);
    }
}

export default new App().app;