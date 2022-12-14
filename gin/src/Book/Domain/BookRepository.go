package Domain

type BookRepository interface {
	Search(title string) (Book, error)
	Insert(book Book) error
}
