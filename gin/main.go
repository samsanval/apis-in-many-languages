package main

import (
	"github.com/gin-gonic/gin"
	"github.com/samsanval/api-gin/controllers"
	"github.com/samsanval/api-gin/database"
)

func main() {
	var router *gin.Engine = gin.Default()
	database.ConnectDatabase()
	router.GET("/books", controllers.FindBooks)
	router.GET("/book/:title", controllers.FindBook)
	router.POST("/books/add", controllers.AddBook)
	router.Run()
}
