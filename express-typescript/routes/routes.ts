
import {Request, Response, Router} from "express";
import { container } from 'tsyringe';
import BookGetBookController from "../controllers/BookGetBookController";
import {BookPostBookController} from "../controllers/BookPostBookController";


export const register = (router: Router) => {
    const bookGetByTitleController = container.resolve(BookGetBookController)
    router.get('/book/:title', (req: Request, res: Response) => bookGetByTitleController.run(req, res));

    const bookPostNewBookController = container.resolve(BookPostBookController);
    router.post('/book/add',(req: Request, res: Response) => bookPostNewBookController.run(req,res));
    router.get('/',(req: Request, res: Response) => res.status(200).json('Welcome ' +
        'to the API books'));
}