
import {Request, Response, Router} from "express";
import { container } from 'tsyringe';
import BookGetBookController from "../controllers/BookGetBookController";


export const register = (router: Router) => {
    const bookGetByTitleController = container.resolve(BookGetBookController)
    router.get('/book/:title', (req: Request, res: Response) => bookGetByTitleController.run(req, res));

    router.get('/',(req: Request, res: Response) => res.status(200).json('Welcome ' +
        'to the API books'));
}