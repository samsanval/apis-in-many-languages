package Persistence

import (
	"database/sql"
	"gin-ddd/src/Book/Domain"
	_ "github.com/go-sql-driver/mysql"
)

type SQLBookRepository struct {
}

func (pbr SQLBookRepository) Search(title string) Domain.Book {
	db, err := sql.Open("mysql",
		"samuel:administrador@tcp(database-1.c6mjvd4f6hsr.us-east-2.rds.amazonaws.com:3306)/symfonyApi")
	if err != nil {
		panic(err.Error())
	}
	var book Domain.Book
	errorQuery := db.QueryRow("SELECT id, title, description FROM books WHERE title = ?", title).
		Scan(&book.Id, &book.Title, &book.Description)
	if errorQuery != nil {
		panic(errorQuery.Error())
	}
	defer func(db *sql.DB) {
		err := db.Close()
		if err != nil {

		}
	}(db)
	return book
}

func NewSQLBookRepository() *SQLBookRepository {
	return &SQLBookRepository{}
}
