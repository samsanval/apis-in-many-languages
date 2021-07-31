package Application

type CreateBookCommand struct {
	Title       string `json:"title"`
	Description string `json:"description"`
}
