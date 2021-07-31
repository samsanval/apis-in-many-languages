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
	book, err := bf.repository.Search(title)
	if err != nil {
		panic(err.Error())
	}
	return book
}
