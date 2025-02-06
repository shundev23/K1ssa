package models

import (
	"time"

	"github.com/lib/pq"
)

type Kissa struct {
	ID           uint   `gorm:"primaryKey"`
	Name         string `gorm:"not null"`
	Address      string `gorm:"not null"`
	OpeningHours string
	Description  string
	ImageURL     string
	Tags         pq.StringArray `gorm:"type:text[]"`
	Latitude     float64
	Longitude    float64
	CreatedAt    time.Time
	UpdatedAt    time.Time
}
