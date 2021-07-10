import * as dotenv from 'dotenv';
import express from "express";
import * as bodyParser from "body-parser";
import {router} from "./routes/routes";
import mongoose from "mongoose";

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use("/", router);
app.use("/books",router);
app.use("/books-all",router);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/books').then(()=> {
   app.listen(process.env.PORT, () => {
      console.log("Start server");
   });
})
