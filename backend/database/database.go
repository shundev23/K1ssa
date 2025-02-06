package database

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"github.com/shundev23/K1ssa/backend/models"
)

var DB *gorm.DB

func ConnectDatabase() {
	// .envファイルの読み込み
	err := godotenv.Load("../../.env")
	if err != nil {
		log.Println("warning: .env file not found")
	}

	// DATABASE_URLの取得
	dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		log.Fatal("DSN must be set")
	}

	// DB接続
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database", err)
	}

	// マイグレーションの実行
	err = db.AutoMigrate(&models.Kissa{})
	if err != nil {
		log.Fatal("Failed to migrate database", err)
	}

	DB = db
	fmt.Println("Connected to database")
}
