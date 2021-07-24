<?php


namespace App\Shared\Infrastructure\Persistence;


use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;

abstract class DoctrineRepository
{

    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    protected function entityManager(): EntityManagerInterface
    {
        return $this->entityManager;
    }

    public function repository(string $entityClass): EntityRepository
    {
        return $this->entityManager->getRepository($entityClass);
    }

    /**
     * @throws OptimisticLockException
     * @throws ORMException
     */
    protected function persist($entity): void
    {
        $this->entityManager()->persist($entity);
        $this->entityManager()->flush($entity);
    }

}