package controllers

import (
	"gin-ddd/src/Book/Application"
	"gin-ddd/src/Book/Domain"
	"github.com/gin-gonic/gin"
	"net/http"
)

type CreateBookController struct {
	bookCreator Application.BookCreator
}

func (cbc CreateBookController) Run(context *gin.Context) {
	var book Domain.Book
	if err := context.ShouldBindJSON(&book); err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
	errCreate := cbc.bookCreator.Run(book.Title, book.Description)
	if errCreate != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": errCreate.Error()})
	}
	context.JSON(http.StatusAccepted, gin.H{"inserted": book})
}

func NewCreateBookController(bookCreate Application.BookCreator) *CreateBookController {
	return &CreateBookController{bookCreator: bookCreate}
}
