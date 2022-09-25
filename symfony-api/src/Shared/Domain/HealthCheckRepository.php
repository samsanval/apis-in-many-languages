<?php

namespace App\Shared\Domain;

interface HealthCheckRepository
{

    public function checkConnection(): bool;

}