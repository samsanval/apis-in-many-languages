package controllers

import (
	"gin-ddd/src/Book/Application"
	"github.com/gin-gonic/gin"
	"net/http"
)

type GetBookController struct {
	finder Application.BookFinder
}

func (gbc GetBookController) Run(context *gin.Context) {
	title := context.Param("title")
	book := gbc.finder.Run(title)
	context.JSON(http.StatusOK, gin.H{"data": book})
}

func NewGetBookController(finder Application.BookFinder) *GetBookController {
	return &GetBookController{finder: finder}
}
