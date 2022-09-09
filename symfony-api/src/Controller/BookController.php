<?php

namespace App\Controller;

use App\Books\Application\All\BookAllHandler;
use App\Books\Application\Find\BookFinder;
use App\Books\Application\Insert\BookCreateCommand;
use App\Books\Domain\Book;
use App\Shared\Domain\Bus\Command\CommandBus;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class BookController extends AbstractController
{

    public function __construct( protected CommandBus $commandBus){}


    /**
     * @Route("/book", name="book")
     */
    public function index(): Response
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/BookController.php',
        ]);
    }

    public function all(BookAllHandler $handler): Response
    {
        $books = $handler->_invoke();
        $response = new Response();
        $response->headers->set('Content-Type', 'application/json');
        $booksJson = [];
        /** @var Book $book */
        foreach ($books as $book) {
            $booksJson[] = [
                'id' => $book->getId()->value(),
                'title' => $book->getTitle(),
                'description' => $book->getDescription()
            ];

        }
        $response->setContent(json_encode($booksJson));

        return $response;
    }

    public function getByTitle(string $id,BookFinder $bookFinder): Response
    {
        $book = $bookFinder($id);
        $response = new Response();
        $response->headers->set('Content-Type', 'application/json');
        $bookJson = array(
            'id' => $book->getId()->value(),
            'title' => $book->getTitle(),
            'description' => $book->getDescription(),
        );
        $response->setContent(json_encode($bookJson));
        return $response;



    }

    public function insert(Request $request)
    {

        $contentToArray = $request->toArray();
        $this->commandBus->dispatch(new BookCreateCommand($contentToArray['id'],$contentToArray['title'], $contentToArray['description']));

        return new JsonResponse('Inserted');
    }

}
