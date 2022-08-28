<?php

namespace App\Shared\Infrastructure\Persistence\Doctrine;

use App\Shared\Domain\Utils;
use Doctrine\DBAL\Platforms\AbstractPlatform;
use Doctrine\DBAL\Types\StringType;
use function Lambdish\Phunctional\last;

abstract class UuidType extends StringType implements DoctrineCustomType
{
    abstract protected function typeClassName(): string;

    public static function customTypeName(): string
    {
        return Utils::toSnakeCase(str_replace('Type', '', (string) last(explode('\\', static::class))));
    }

    public function getName()
    {
        return self::customTypeName();
    }
    public function convertToDatabaseValue($value, AbstractPlatform $platform)
    {
        /** @var Uuid $value */
        return $value->value();
    }

    public function convertToPHPValue($value, AbstractPlatform $platform)
    {
        $className = $this->typeClassName();

        return new $className($value);
    }


}