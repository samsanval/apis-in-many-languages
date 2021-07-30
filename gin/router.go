package main

import (
	"gin-ddd/controllers"
	"github.com/gin-gonic/gin"
	"net/http"
)

func SetupRouter() *gin.Engine {
	var router = gin.Default()
	router.GET("/", func(context *gin.Context) {
		context.JSON(http.StatusAccepted, "Welcome to Go")
	})
	bookFinder, _ := InitializeBookFinder()
	gbc := controllers.NewGetBookController(*bookFinder)
	router.GET("/book/:title", gbc.Run)
	return router
}
