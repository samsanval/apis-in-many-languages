package Persistence

import (
	"database/sql"
	"gin-ddd/src/Book/Domain"
	_ "github.com/go-sql-driver/mysql"
)

type SQLBookRepository struct {
}

func (sbr SQLBookRepository) Search(title string) (Domain.Book, error) {
	db, err := sql.Open("mysql",
		"samuel:administrador@tcp(database-1.c6mjvd4f6hsr.us-east-2.rds.amazonaws.com:3306)/symfonyApi")
	if err != nil {
		panic(err.Error())
	}
	var book Domain.Book
	errorQuery := db.QueryRow("SELECT id, title, description FROM books WHERE title = ?", title).
		Scan(&book.Id, &book.Title, &book.Description)
	if errorQuery != nil {
		return book, &Domain.BookNotExist{Msg: "The book does not exist"}
	}

	defer func(db *sql.DB) {
		err := db.Close()
		if err != nil {

		}
	}(db)
	return book, nil
}
func (sbr SQLBookRepository) Insert(book Domain.Book) error {
	db, err := sql.Open("mysql",
		"samuel:administrador@tcp(database-1.c6mjvd4f6hsr.us-east-2.rds.amazonaws.com:3306)/symfonyApi")
	if err != nil {
		return err
	}
	insertQuery, err := db.Prepare("INSERT INTO books(title,description) VALUES(?,?)")
	if err != nil {
		return err
	}
	_, er := insertQuery.Exec(book.Title, book.Description)
	if er != nil {
		return er
	}
	defer func(db *sql.DB) {
		err := db.Close()
		if err != nil {

		}
	}(db)

	return nil
}

func NewSQLBookRepository() *SQLBookRepository {
	return &SQLBookRepository{}
}
