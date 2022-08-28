<?php


namespace App\Books\Application\Find;


use App\Books\Domain\Book;
use App\Books\Domain\BookId;
use App\Books\Domain\BookNotExist;
use App\Books\Domain\BookRepository;

final class BookFinder
{

    private BookRepository $repository;

    public function __construct(BookRepository $repository)
    {
        $this->repository = $repository;
    }
    public function __invoke(string $bookId): Book
    {
        $bookId = new BookId($bookId);
        $book = $this->repository->search($bookId);
        if(!$book) {
            throw new BookNotExist($bookId);
        }

        return $book;
    }
}