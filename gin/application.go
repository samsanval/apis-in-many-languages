package main

func main() {
	var router = SetupRouter()
	err := router.Run(":5000")
	if err != nil {
		return
	}
}
