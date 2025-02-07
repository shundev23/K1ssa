package main

import (
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/shundev23/K1ssa/backend/database"
	"github.com/shundev23/K1ssa/backend/routes"
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
	router := gin.Default()

	// ルート設定
	routes.SetupRoutes(router)

	// ルート一覧を出力
	fmt.Println("Registered routes:")
	for _, route := range router.Routes() {
		fmt.Println(route.Method, route.Path)
	}

	// サーバー起動
	port := ":8080"
	fmt.Println("Server is running on port", port)
	if err := router.Run(port); err != nil {
		panic(err)
	}
}
