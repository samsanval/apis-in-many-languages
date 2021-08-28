import {Controller} from "./Controller";
import {Request, Response} from "express";
import {CreateBookCommand} from "../src/Book/Application/CreateBookCommand";
import {inject, injectable} from "tsyringe";
import {CommandBus} from "../src/Shared/Domain/CommandBus/CommandBus";

@injectable()
export class BookPostBookController implements Controller{
    constructor(@inject("CommandBus") private bus: CommandBus) {
    }

    async run(req: Request, res: Response): Promise<void> {
        const id: number = req.body.id;
        const title: string = req.body.title;
        const description: string = req.body.description;
        const createBookCommand = new CreateBookCommand({id, title, description});
        try {
            await this.bus.dispatch(createBookCommand);

        } catch(error){
            res.status(500).json(error);
        }
        res.status(204).send();
    }

}