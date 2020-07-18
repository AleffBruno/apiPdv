import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import compression from "compression";
// import Routes from './Routes';
import Routes from './routes/index';
import helmet from 'helmet';
import {createConnection} from "typeorm";
import "reflect-metadata";

import dotenv from "dotenv";
dotenv.config(); 

class App {
    public app : express.Application;

    constructor() {
        this.app = express();
        this.applyMiddlewares();
        this.routes();
        this.startConnectionTypeOrm();
    }

    private applyMiddlewares() {
        this.app.use(helmet())
        this.app.use(cors({ credentials: true, origin: true }));
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(compression());
    }

    private routes() {
        this.app.use("/", Routes);
    }

    async startConnectionTypeOrm() {
        //config come from 'ormconfig.json'
        // WARNING > on key "entities" DON'T use '/'(slash) when start to write the path
        // AVISO > ATENÇÃO PARA REFERENCIAS DE 'PATH' POIS OQUE VALE É O 'BUILD DO JAVASCRIPT' {
        //     EX ERRADO: src/model/*.ts
        //     EX CORRETO: dist/model/*.js
        // }

        await createConnection(
            //COMENTADO PORQUE EXISTE ormconfig.json
            // {
            //     type: "mysql",
            //     host: process.env.DB_HOST,
            //     port: 3306,
            //     username: process.env.DB_USER,
            //     password: process.env.DB_PASS,
            //     database: process.env.DB_NAME,
            //     entities: [
            //         "dist/app/models/*.js"
            //     ],
            //     migrations: [
            //         "dist/database/migrations/*.js"
            //     ],
            //     cli: { "migrationsDir": "src/migrations/" },
            //     synchronize: true, //COLOQUE 'FALSE' QUANDO COMEÇAR A PROD
            //     logging: false
            // }
        ).then(connection => {
            console.log(">TYPEORM CONECTADO<")
            // here you can start to work with your entities
        }).catch(error => console.log(error));

        // try {
            
        // } catch (err) {
        //     //uma boa seria chamar meu middleware de erro aqui
        //     console.log("====>> SE O TESTE RODOU, IGNORE ESSE ERRO ABAIXO <<====");
        //     console.log(err);
        // }
    }
}

export default new App().app;