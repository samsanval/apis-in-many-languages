type Params = {
    id: number,
    title: string,
    description: string
};

export class CreateBookCommand {
    id: number;
    title: string;
    description: string;

    constructor({id, title, description} : Params)
    {
        this.id = id;
        this.title = title;
        this.description = description;
    }

}