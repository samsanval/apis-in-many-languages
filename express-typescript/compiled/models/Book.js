"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class Book extends mongoose_1.Model {
    constructor(title, description) {
        super();
        this.title = title;
        this.description = description;
    }
    setTitle(title) {
        this.title = title;
    }
    setDescription(description) {
        this.description = description;
    }
}
const BookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});
BookSchema.loadClass(Book);
exports.default = mongoose_1.model('Book', BookSchema);
