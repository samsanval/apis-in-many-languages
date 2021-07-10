package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/samsanval/api-gin/database"
	"github.com/samsanval/api-gin/models"
)

func FindBooks(context *gin.Context) {
	var books []models.Book
	database.DB.Find(&books)
	context.JSON(http.StatusOK, gin.H{"data": books})
}

func FindBook(context *gin.Context) {
	var book models.Book
	err := database.DB.Where("title= ?", context.Param("title")).First(&book).Error
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	context.JSON(http.StatusOK, gin.H{"data": book})
}

func AddBook(context *gin.Context) {
	var input models.CreateBookInput
	if err := context.ShouldBindJSON(&input); err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	book := models.Book{Title: input.Title, Description: input.Description}
	database.DB.Create(&book)
	context.JSON(http.StatusAccepted, gin.H{"data": book})
}
