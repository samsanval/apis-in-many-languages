<?php


namespace App\Books\Infrastructure\Persistence;


use App\Books\Domain\Book;
use App\Books\Domain\BookRepository;
use App\Shared\Infrastructure\Persistence\DoctrineRepository;

class DoctrineBookRepository extends DoctrineRepository implements BookRepository
{

    public function save(Book $book): void
    {
        $this->persist($book);
    }

    public function search(string $title): ?Book
    {

        return $this->repository(Book::class)->findOneBy(array('title' => $title));

    }
}