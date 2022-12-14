<?php


namespace App\Books\Domain;


use App\Shared\Domain\Aggregate\AggregateRoot;

final class Book extends AggregateRoot
{

    private BookId $id;

    private string $title;

    private string $description;

    public function __construct(BookId $id, string $title, string $description)
    {
        $this->id = $id;
        $this->title = $title;
        $this->description = $description;
    }

    public function getId(): ?BookId
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public static function create(BookId $id, string $title, string $description): self
    {
        $book = new self($id, $title, $description);
        return $book;
    }


}