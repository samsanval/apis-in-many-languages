<?php


namespace App\Books\Application\Insert;


use App\Shared\Domain\Bus\Command\CommandHandler;

final class BookCreateHandler implements CommandHandler
{

    private BookCreator $creator;

    public function __construct(BookCreator $creator)
    {
        $this->creator = $creator;
    }

    public function __invoke(BookCreateCommand $command): void
    {
        $id = $command->getId();
        $title = $command->getTitle();
        $description = $command->getDescription();

        $this->creator->__invoke($id, $title, $description);
    }

}