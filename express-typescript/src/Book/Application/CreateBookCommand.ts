import {Command} from "../../Shared/Domain/CommandBus/Command";

type Params = {
    id: number,
    title: string,
    description: string
};

export class CreateBookCommand extends Command{
    id: number;
    title: string;
    description: string;

    constructor({id, title, description} : Params)
    {
        super();
        this.id = id;
        this.title = title;
        this.description = description;
    }

}