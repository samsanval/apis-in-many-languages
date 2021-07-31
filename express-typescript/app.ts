import 'reflect-metadata'
import createDependencies from "./dependency-injection";
import {createServer} from "http2";
import express from "express";
import Router from "express-promise-router";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import helmet from "helmet";
import {registerRoutes} from "./routes";

createDependencies()
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