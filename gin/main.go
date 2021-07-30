package main

func main() {
	var router = SetupRouter()
	err := router.Run()
	if err != nil {
		return
	}
}
