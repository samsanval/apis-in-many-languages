export class BookNotExist extends Error
{
    constructor(title:string) {
        super(`Book ${title} does not exist`);
    }
}