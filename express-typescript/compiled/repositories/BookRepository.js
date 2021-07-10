"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class BookRepository {
    constructor() { }
    getAll() {
        return mongoose_1.default.model('Book').find().exec();
    }
    getByTitle(title) {
        return mongoose_1.default.model('Book').findOne({ "title": title }).exec();
    }
    addBook(book, cb) {
        book.save((error) => {
            cb(error);
        });
    }
}
exports.default = BookRepository;
