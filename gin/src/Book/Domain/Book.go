package Domain

type Book struct {
	Id          uint   `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
}

func CreateBook(title string, description string) Book {
	return Book{Title: title, Description: description}
}
