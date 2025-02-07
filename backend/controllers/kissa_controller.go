package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/shundev23/K1ssa/backend/database"
	"github.com/shundev23/K1ssa/backend/models"
)

// 喫茶店一覧取得
func GetKissaList(c *gin.Context) {
	var kissas []models.Kissa
	database.DB.Find(&kissas)
	c.JSON(http.StatusOK, kissas)
}

// 特定の喫茶店取得
func GetKissa(c *gin.Context) {
	id := c.Param("id")
	var kissa models.Kissa
	if err := database.DB.First(&kissa, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Record not found!"})
		return
	}
	c.JSON(http.StatusOK, kissa)
}

// 喫茶店登録
func CreateKissa(c *gin.Context) {
	var kissa models.Kissa
	if err := c.ShouldBindJSON(&kissa); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	database.DB.Create(&kissa)
	c.JSON(http.StatusCreated, kissa)
}

// 喫茶店更新
func UpdateKissa(c *gin.Context) {
	id := c.Param("id")
	var kissa models.Kissa
	if err := database.DB.First(&kissa, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Record not found!"})
		return
	}

	if err := c.ShouldBindJSON(&kissa); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	database.DB.Save(&kissa)
	c.JSON(http.StatusOK, kissa)
}

// 喫茶店削除
func DeleteKissa(c *gin.Context) {
	id := c.Param("id")
	if err := database.DB.Delete(&models.Kissa{}, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Record not found!"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Record deleted successfully!"})
}
