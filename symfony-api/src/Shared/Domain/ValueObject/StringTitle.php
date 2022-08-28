<?php

namespace App\Shared\Domain\ValueObject;

abstract class StringTitle
{
    private string $value;

    public function __construct(string $value)
    {
        $this->value = $value;

    }

    public function value(): string
    {
        return $this->value;
    }

}