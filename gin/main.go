package main

import (
	"github.com/gin-gonic/gin"
	"github.com/samsanval/api-gin/controllers"
	"github.com/samsanval/api-gin/models"
)

func main() {
	var router *gin.Engine = gin.Default()
	models.ConnectDatabase()
	router.GET("/books", controllers.FindBooks)
	router.GET("/book/:title", controllers.FindBook)
	router.POST("/books/add", controllers.AddBook)
	router.Run()
}
