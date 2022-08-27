<?php


namespace App\Books\Domain;


use DomainException;

class BookNotExist extends DomainException
{
    private string $title;

    public function __construct(string $title)
    {
        parent::__construct();
        $this->title = $title;
    }

    public function errorCode(): string
    {
        return 'book_not_exist';
    }

    protected function errorMessage(): string
    {
        return sprintf('The book <%s> does not exist', $this->title);
    }


}