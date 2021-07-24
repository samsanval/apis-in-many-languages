<?php


namespace App\Books\Application\Insert;


use App\Books\Domain\Book;
use App\Books\Domain\BookRepository;

class BookCreator
{

    private BookRepository $repository;

    public function __construct(BookRepository $repository)
    {
        $this->repository = $repository;
    }

    public function __invoke(int $id, string $title, string $description): void
    {
        $book= Book::create($id,$title,$description);
        $this->repository->save($book);
    }

}