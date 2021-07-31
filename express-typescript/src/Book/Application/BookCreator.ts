import BookRepository from "../Domain/BookRepository";
import {inject, injectable} from "tsyringe";
import Book from "../Domain/Book";

type Params = {
    id: number,
    title: string,
    description: string
};

@injectable()
export class BookCreator {
    private repository: BookRepository;

    constructor(@inject("BookRepository")repository: BookRepository)
    {
        this.repository = repository;
    }
    async run({id,title,description}: Params): Promise<void>
    {
        const book = Book.create(id,title,description);
        await this.repository.insert(book);
    }
}