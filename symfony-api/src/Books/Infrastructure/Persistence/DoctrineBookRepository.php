<?php


namespace App\Books\Infrastructure\Persistence;


use App\Books\Domain\Book;
use App\Books\Domain\BookId;
use App\Books\Domain\BookRepository;
use App\Shared\Infrastructure\Persistence\DoctrineRepository;

class DoctrineBookRepository extends DoctrineRepository implements BookRepository
{

    public function save(Book $book): void
    {
        $this->persist($book);
    }

    public function search(BookId $id): ?Book
    {

        return $this->repository(Book::class)->find($id);

    }
}