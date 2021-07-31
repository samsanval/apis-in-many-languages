import {AggregateRoot} from "../../Shared/Domain/AggregateRoot";

export default class Book extends AggregateRoot{
    public id: number;
    private title: string
    private description : string

    constructor(id: number, title: string, description: string)
    {
        super();
        this.id = id;
        this.title = title;
        this.description = description;
    }
    setDescription(description: string): void
    {
        this.description = description;
    }

    static create(id:number, title: string, description: string): Book
    {
        return new Book(id, title, description);
    }

    static fromPrimitives(data: {id: number, title: string, description: string}): Book
    {
        return new Book(
            data.id,
            data.title,
            data.description
        );
    }

    toPrimitives(): any
    {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
        }
    }

}

