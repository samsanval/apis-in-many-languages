package models

import "gorm.io/gorm"

type Book struct {
	gorm.Model
	ID          uint   `json:"id" gorm:"primary_key"`
	Title       string `json:"title"`
	Description string `json:"description"`
}
type CreateBookInput struct {
	Title       string `json:"title" binding:"required"`
	Description string `json:"description" binding:"required"`
}
