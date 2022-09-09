<?php

namespace App\Books\Application\All;

use App\Books\Domain\BookRepository;

final class BookAllHandler
{
    private BookRepository $bookRepository;

    public function __construct(BookRepository $bookRepository)
    {
        $this->bookRepository = $bookRepository;
    }

    public function _invoke()
    {
        return $this->bookRepository->all();
    }

}