import {inject, injectable} from "tsyringe";
import {BookCreator} from "./BookCreator";
import {CreateBookCommand} from "./CreateBookCommand";
import {CommandHandler} from "../../Shared/Domain/CommandBus/CommandHandler";
import {Command} from "../../Shared/Domain/CommandBus/Command";

@injectable()
export class CreateBookCommandHandler implements CommandHandler<CreateBookCommand>{
    constructor(@inject("BookCreator") private bookCreator: BookCreator)
    {
    }

    async handle(command: CreateBookCommand): Promise<void>
    {
        const id = command.id;
        const title = command.title;
        const description = command.description;
        await this.bookCreator.run({id, title, description});
    }

    subscribedTo(): Command {
        return CreateBookCommand;
    }
}