<?php

namespace App\Books\Infrastructure\Bus\Command;

use App\Shared\Domain\Bus\Command\Command;
use App\Shared\Domain\Bus\Command\CommandBus;
use App\Shared\Infrastructure\Bus\CallableFirstParameterExtractor;
use Symfony\Component\Messenger\Exception\HandlerFailedException;
use Symfony\Component\Messenger\Exception\NoHandlerForMessageException;
use Symfony\Component\Messenger\Handler\HandlersLocator;
use Symfony\Component\Messenger\MessageBus;
use Symfony\Component\Messenger\Middleware\HandleMessageMiddleware;

final class SymfonyCommandBus implements CommandBus
{
    private MessageBus $bus;

    public function __construct(iterable $handlers)
    {
        $this->bus = new MessageBus(
            [
            new HandleMessageMiddleware(
                new HandlersLocator(CallableFirstParameterExtractor::forCallables($handlers)))
            ]
        );
    }

    public function dispatch(Command $command)
    {
        try {
            $this->bus->dispatch($command);
        } catch (NoHandlerForMessageException | HandlerFailedException $error) {
            throw $error->getPrevious() ?? $error;
        }
    }


}