<?php

namespace App\Controller;

use App\Books\Application\Find\BookFinder;
use App\Books\Application\Insert\BookCreateCommand;
use App\Books\Application\Insert\BookCreateHandler;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BookController extends AbstractController
{
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

    public function getByTitle(string $title,BookFinder $bookFinder): Response
    {
        $book = $bookFinder($title);
        $response = new Response();
        $response->headers->set('Content-Type', 'application/json');
        $bookJson = array(
            'title' => $book->getTitle(),
            'description' => $book->getDescription(),
        );
        $response->setContent(json_encode($bookJson));
        return $response;



    }


    public function insert(Request $request, BookCreateHandler $creator)
    {

        $contentToArray = $request->toArray();
        $creator(new BookCreateCommand($contentToArray['id'],$contentToArray['title'], $contentToArray['description']));


        return new JsonResponse('Inserted');
    }

}
