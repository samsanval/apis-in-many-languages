package Application

type CreateBookCommandHandler struct {
	bookCreator BookCreator
}

func NewCreateBookCommandHandler(bookCreator BookCreator) *CreateBookCommandHandler {
	return &CreateBookCommandHandler{bookCreator: bookCreator}
}

func (cbh CreateBookCommandHandler) Handle(command CreateBookCommand) error {
	var title = command.Title
	var description = command.Description
	return cbh.bookCreator.Run(title, description)
}
