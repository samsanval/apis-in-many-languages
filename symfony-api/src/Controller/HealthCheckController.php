<?php

namespace App\Controller;

use App\Shared\Domain\HealthCheckRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

final class HealthCheckController extends AbstractController
{
    public function __construct(protected HealthCheckRepository $checkRepository)
    {
    }

    public function __invoke(
    ) {
        return new JsonResponse(
            ['backend' => 'ok', 'database' => $this->checkRepository->checkConnection()]
        )   ;
    }

}