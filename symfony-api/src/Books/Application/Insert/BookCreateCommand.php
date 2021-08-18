<?php


namespace App\Books\Application\Insert;


use App\Shared\Domain\Bus\Command\Command;

final class BookCreateCommand implements Command
{

    private int $id;
    private string $title;
    private string $description;

    public function __construct(int $id, string $title, string $description)
    {
        $this->id = $id;
        $this->title = $title;
        $this->description = $description;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getDescription(): string
    {
        return $this->description;
    }
}