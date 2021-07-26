import BookRepository from "../Domain/BookRepository";
import Book from "../Domain/Book";
import {inject, injectable} from "tsyringe";

@injectable()
export class BookFinder
{

    constructor( @inject("BookRepository") private repository: BookRepository)
    {
    }

    async run(title: string): Promise<Book | null>
    {
        return await this.repository.search(title);
    }
}