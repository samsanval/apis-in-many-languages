import {inject, injectable} from "tsyringe";
import {BookCreator} from "./BookCreator";
import {CreateBookCommand} from "./CreateBookCommand";

@injectable()
export class CreateBookCommandHandler {
    constructor(@inject("BookCreator") private bookCreator: BookCreator)
    {
    }

    async run(command: CreateBookCommand): Promise<void>
    {
        const id = command.id;
        const title = command.title;
        const description = command.description;
        await this.bookCreator.run({id, title, description});
    }
}