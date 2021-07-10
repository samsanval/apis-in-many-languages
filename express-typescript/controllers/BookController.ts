import {Request, Response} from "express";
import Book from "../models/Book";
import BookRepository from "../repositories/BookRepository";

class BookController{

    constructor() {
    }
    public greet(req: Request, res: Response)
    {
        return res.status(200).json({'Hola': 'hola'});
    }
    public getAll(req: Request, res: Response)
    {
        const br = new BookRepository();
        return br.getAll().then(books=> res.status(200).json(books));
    }
    public getByTitle(req: Request, res: Response)
    {
        const br = new BookRepository();
        return br.getByTitle(req.params.title).then(book=>res.status(200).json(book));
    }
    public save(req: Request, res:Response) {
        const params = req.body;
        const book: InstanceType<typeof Book> = new Book();
        book.setTitle(params.title);
        book.setDescription(params.description);
        const br: BookRepository = new BookRepository();
        br.addBook(book, (error: Function) => {
            if(error){
                return res.status(500).send({
                    message: 'Error al devolver los datos'
                });
            }
            return res.status(200).send({book: book, message: 'Stored'});
        });
    }
}
export default BookController;
