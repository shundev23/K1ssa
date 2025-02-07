package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/shundev23/K1ssa/backend/controllers"
)

func SetupRoutes(router *gin.Engine) {
	kissaRoutes := router.Group("/kissa")
	{
		kissaRoutes.GET("", controllers.GetKissaList)
		kissaRoutes.GET("/:id", controllers.GetKissa)
		kissaRoutes.POST("/", controllers.CreateKissa)
		kissaRoutes.PUT("/:id", controllers.UpdateKissa)
		kissaRoutes.DELETE("/:id", controllers.DeleteKissa)
	}
}
