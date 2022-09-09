<?php


namespace App\Books\Domain;


interface BookRepository
{
    public function save(Book $book): void;
    public function search(BookId $id): ?Book;
    public function all(): array;

}