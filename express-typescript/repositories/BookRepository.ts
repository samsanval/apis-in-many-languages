import mongoose, {CallbackError, Model} from "mongoose";
import Book from "../models/Book";

class BookRepository {
    constructor() { }

    getAll(): Promise<mongoose.Document<typeof Book, any, unknown>[]>
    {
        return mongoose.model('Book').find().exec();
    }

    getByTitle(title: string): Promise<mongoose.Document<typeof Book, any, unknown> | null>
    {
        return mongoose.model('Book').findOne({"title": title}).exec();
    }

    addBook(book: InstanceType<typeof Book>, cb: Function)
    {
        book.save((error: CallbackError) => {
            cb(error);
        });
    }
}
export default BookRepository;