package Domain

type BookNotExist struct {
	Msg string `json:"msg"`
}

func (e *BookNotExist) Error() string {
	return e.Msg
}
