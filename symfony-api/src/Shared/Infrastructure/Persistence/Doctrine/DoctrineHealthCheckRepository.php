<?php

namespace App\Shared\Infrastructure\Persistence\Doctrine;

use App\Shared\Domain\HealthCheckRepository;
use App\Shared\Infrastructure\Persistence\DoctrineRepository;

class DoctrineHealthCheckRepository extends DoctrineRepository implements HealthCheckRepository
{

    public function checkConnection(): bool
    {
        return $this->entityManager()->getConnection()->connect();
    }
}