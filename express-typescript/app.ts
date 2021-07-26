import 'reflect-metadata'
import * as dotenv from 'dotenv';
import express from "express";
import Router from 'express-promise-router';
import * as bodyParser from "body-parser";
import { registerRoutes } from './routes';
import helmet from "helmet";
import {container} from "tsyringe";
import {MongoBookRepository} from "./src/Book/Infrastructure/Persistence/MongoBookRepository";
import {MongoConfigFactory} from "./src/Shared/Infrastructure/Persistence/Mongo/MongoConfigFactory";
import {MongoClientFactory} from "./src/Shared/Infrastructure/Persistence/Mongo/MongoClientFactory";

container.register("BookRepository", {
   useClass: MongoBookRepository
});
container.register("MongoConfigFactory", {
   useFactory: MongoConfigFactory.createConfig
});
container.register("MongoClientFactory", {
   useValue: MongoClientFactory.createClient('dev')
});
const app = express();
const router = Router();
dotenv.config();
app.use(bodyParser.json());
app.use(helmet());
app.use(router);
registerRoutes(router);
   app.listen(3000, () => {
      console.log("Start server");
   });