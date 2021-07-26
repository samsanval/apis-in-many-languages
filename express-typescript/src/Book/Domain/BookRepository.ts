import Book from "./Book";

interface BookRepository {

    insert(book: Book): Promise<void>;
    search(title: string): Promise<Book | null>;
}
export default BookRepository;