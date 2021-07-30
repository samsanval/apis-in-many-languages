//go:build wireinject
// +build wireinject

package main

import (
	"gin-ddd/src/Book/Application"
	"gin-ddd/src/Book/Domain"
	"gin-ddd/src/Book/Infrastructure/Persistence"
	"github.com/google/wire"
)

func InitializeBookFinder() (*Application.BookFinder, error) {
	wire.Build(Persistence.NewSQLBookRepository,
		wire.Bind(new(Domain.BookRepository), new(*Persistence.SQLBookRepository)),
		Application.NewBookFinder)

	return &Application.BookFinder{}, nil
}
