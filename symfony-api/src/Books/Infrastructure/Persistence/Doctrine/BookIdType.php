<?php

namespace App\Books\Infrastructure\Persistence\Doctrine;

use App\Books\Domain\BookId;
use App\Shared\Infrastructure\Persistence\Doctrine\UuidType;

final class BookIdType extends UuidType
{

    protected function typeClassName(): string
    {
        return BookId::class;
    }
}