<?php


namespace App\Books\Application\Insert;


use App\Shared\Domain\Bus\Command\Command;

final class BookCreateCommand implements Command
{

    private string $id;
    private string $title;
    private string $description;

    public function __construct(string $id, string $title, string $description)
    {
        $this->id = $id;
        $this->title = $title;
        $this->description = $description;
    }

    public function getId(): string
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