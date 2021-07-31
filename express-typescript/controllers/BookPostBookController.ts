import {Controller} from "./Controller";
import {Request, Response} from "express";
import {CreateBookCommand} from "../src/Book/Application/CreateBookCommand";
import {CreateBookCommandHandler} from "../src/Book/Application/CreateBookCommandHandler";
import {BookCreator} from "../src/Book/Application/BookCreator";
import {inject, injectable} from "tsyringe";

@injectable()
export class BookPostBookController implements Controller{
    constructor(@inject("BookCreator") private bookCreator: BookCreator) {
    }

    async run(req: Request, res: Response): Promise<void> {
        const id: number = req.body.id;
        const title: string = req.body.title;
        const description: string = req.body.description;
        const createBookCommand = new CreateBookCommand({id, title, description});
        const createBookCommandHandler = new CreateBookCommandHandler(this.bookCreator);

        try {
            await createBookCommandHandler.run(createBookCommand);

        } catch(error){
            res.status(500).json(error);
        }
        res.status(204).send();
    }

}