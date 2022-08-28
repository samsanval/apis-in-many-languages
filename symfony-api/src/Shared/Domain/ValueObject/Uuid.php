<?php

namespace App\Shared\Domain\ValueObject;

use InvalidArgumentException;
use Ramsey\Uuid\Uuid as RamseyUuid;

abstract class Uuid
{
    private string $value;

    public function __construct(string $value)
    {
        $this->value = $value;

    }

    public static function random(): self
    {
        return new static(RamseyUuid::uuid4()->toString());
    }

    public function value(): string
    {
        return $this->value;
    }

    public function equals(Uuid $uuid): bool
    {
        return $this->value() === $uuid->value();
    }

    public function __toString(): string
    {
        return $this->value();
    }

    private function isValidUuid(string $id): void
    {
        if (!RamseyUuid::isValid($id)) {
            throw new InvalidArgumentException(sprintf('<%s> does not allow the value <%s>.', static::class, $id));
        }
    }
}