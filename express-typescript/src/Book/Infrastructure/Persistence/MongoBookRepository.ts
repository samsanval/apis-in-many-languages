import {MongoRepository} from "../../../Shared/Infrastructure/Persistence/Mongo/MongoRepository";
import BookRepository from "../../Domain/BookRepository";
import Book from "../../Domain/Book";

export class MongoBookRepository extends MongoRepository<Book> implements BookRepository
{
    protected moduleName(): string {
        return "books";
    }

    public insert(book: Book): Promise<void> {
        return this.persist(book.id, book);
    }

    public async search(title: string): Promise<Book | null> {
        const collection = await this.collection();
        const document = await collection.findOne({ title: title});
        return document ? Book.fromPrimitives({...document, title: title}): null;
    }

}