package main

import (
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/shundev23/K1ssa/backend/database"
)

func main() {
	// .envファイルの読み込み
	err := godotenv.Load("../../.env")
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	// db接続
	database.ConnectDatabase()

	// Ginセットアップ
	r := gin.Default()

	// サーバー起動
	port := ":8080"
	fmt.Println("Server is running on port", port)
	if err := r.Run(port); err != nil {
		panic(err)
	}
}
