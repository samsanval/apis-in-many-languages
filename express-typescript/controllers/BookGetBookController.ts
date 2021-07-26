import { Controller } from "./Controller";
import {Request, Response} from "express";
import {BookFinder} from "../src/Book/Application/BookFinder";
import {BookNotExist} from "../src/Book/Domain/BookNotExist";
import {injectable} from "tsyringe";

@injectable()
export default class BookGetBookController implements Controller
{
    private bookFinder: BookFinder;

    constructor(bookFinder: BookFinder)
    {
        this.bookFinder = bookFinder;
    }

    async run(req: Request, res: Response ): Promise<void>
    {
        const title: string = req.params.title;
        try {
            const book = await this.bookFinder.run(title)
            res.status(200).json(book);
        } catch (e) {
            if(e instanceof BookNotExist) {
                res.status(404).send();

            }
            else {
                res.status(500).send(e);
            }

        }

    }

}