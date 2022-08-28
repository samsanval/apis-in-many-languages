<?php

namespace App\Shared\Infrastructure\Persistence\Doctrine;

use function Lambdish\Phunctional\each;
use Doctrine\DBAL\Types\Type;

final class DoctrineCustomTypeRegister
{
    private static bool $initialized = false;

    public static function register(array $customTypeClassNames): void
    {
        if (!self::$initialized) {
            each(self::registerType(), $customTypeClassNames);

            self::$initialized = true;
        }
    }

    private static function registerType(): callable
    {
        return static function (string $customTypeClassName): void {
            Type::addType($customTypeClassName::customTypeName(), $customTypeClassName);
        };
    }
}