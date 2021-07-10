"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = __importDefault(require("../models/Book"));
const BookRepository_1 = __importDefault(require("../repositories/BookRepository"));
class BookController {
    constructor() {
    }
    greet(req, res) {
        return res.status(200).json({ 'Hola': 'hola' });
    }
    getAll(req, res) {
        const br = new BookRepository_1.default();
        return br.getAll().then(books => res.status(200).json(books));
    }
    getByTitle(req, res) {
        const br = new BookRepository_1.default();
        return br.getByTitle(req.params.title).then(book => res.status(200).json(book));
    }
    save(req, res) {
        const params = req.body;
        const book = new Book_1.default();
        book.setTitle(params.title);
        book.setDescription(params.description);
        const br = new BookRepository_1.default();
        br.addBook(book, (error) => {
            if (error) {
                return res.status(500).send({
                    message: 'Error al devolver los datos'
                });
            }
            return res.status(200).send({ book: book, message: 'Stored' });
        });
    }
}
exports.default = BookController;
