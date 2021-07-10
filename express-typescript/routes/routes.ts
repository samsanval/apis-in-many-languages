'use strict'

import express from "express";
import BookController  from "../controllers/BookController";

const router = express.Router();
const bookController = new BookController();

router.get('/', bookController.greet);
router.get('/books',bookController.getAll);
router.get('/book/:title',bookController.getByTitle);
router.post('/new-book', bookController.save);


export {router};