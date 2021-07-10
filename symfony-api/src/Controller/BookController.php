<?php

namespace App\Controller;

use App\Entity\Books;
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

    /**
     * @Route("/books", name="books")
     */
    public function getAll(): Response
    {
        $em = $this->getDoctrine()->getManager();
        $response = new Response();
        $query = $em->createQuery(
            'SELECT b
            FROM App\Entity\Books b'
        );
        $books = $query->getArrayResult();
        $response->headers->set('Content-Type', 'application/json');
        $response->setContent(json_encode($books));
        return $response;

    }
    /**
     * @Route("/book/{title}", name="get_book", methods={"GET"})
     */
    public function getByTitle(Request $request): Response
    {
        $title = $request->get('title');
        $em = $this->getDoctrine()->getManager();
        $query = $em->createQuery(
            'SELECT b
            FROM App\Entity\Books b
            WHERE b.title = :title'
        );
        $query->setParameter('title',$title);
        $book = $query->getArrayResult();
        $response = new Response();
        $response->headers->set('Content-Type', 'application/json');
        $response->setContent(json_encode($book));
        return $response;



    }
    /**
     * @Route("/books/add", name="add_books", methods={"POST"})
     */
    public function insert(Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $book = new Books();
        $contentToArray = $request->toArray();
        $book->setTitle($contentToArray['title']);
        $book->setDescription($contentToArray['description']);
        $entityManager->persist($book);
        $entityManager->flush();
        return new JsonResponse('Inserted');
    }

}
