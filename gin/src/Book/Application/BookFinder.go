package Application

import (
	"gin-ddd/src/Book/Domain"
)

type BookFinder struct {
	repository Domain.BookRepository
}

func NewBookFinder(repository Domain.BookRepository) *BookFinder {
	return &BookFinder{repository: repository}
}

func (bf BookFinder) Run(title string) Domain.Book {
	return bf.repository.Search(title)
}
