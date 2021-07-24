<?php


namespace App\Books\Application\Find;


use App\Books\Domain\Book;
use App\Books\Domain\BookNotExist;
use App\Books\Domain\BookRepository;

final class BookFinder
{

    private BookRepository $repository;

    public function __construct(BookRepository $repository)
    {
        $this->repository = $repository;
    }
    public function __invoke(string $title): Book
    {
        $book = $this->repository->search($title);
        if(!$book) {
            throw new BookNotExist($title);
        }

        return $book;
    }
}