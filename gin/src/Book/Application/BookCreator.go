package Application

import "gin-ddd/src/Book/Domain"

type BookCreator struct {
	repository Domain.BookRepository
}

func NewBookCreator(repository Domain.BookRepository) *BookCreator {
	return &BookCreator{repository: repository}
}
func (bc BookCreator) Run(title string, description string) error {

	var book = Domain.CreateBook(title, description)
	err := bc.repository.Insert(book)
	return err
}
