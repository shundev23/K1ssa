# データモデル設計

## 喫茶店情報のデータモデル（MVP）

### **テーブル設計（PostgreSQL）**
```sql
CREATE TABLE coffee_shops (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    opening_hours TEXT,
    description TEXT,
    image_url TEXT,
    tags TEXT[],  -- 配列形式でタグを保存
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### **Go（Gorm）でのモデル定義**
```go
package models

import (
    "time"
    "github.com/lib/pq"
)

type CoffeeShop struct {
    ID           uint      `gorm:"primaryKey"`
    Name         string    `gorm:"not null"`
    Address      string    `gorm:"not null"`
    OpeningHours string
    Description  string
    ImageURL     string
    Tags         pq.StringArray `gorm:"type:text[]"`
    Latitude     float64
    Longitude    float64
    CreatedAt    time.Time
    UpdatedAt    time.Time
}
```

- **Gormの `pq.StringArray` を使用** してタグを配列で保存
- `CreatedAt`, `UpdatedAt` は自動で管理

---

このデータモデルをもとに、今後の開発を進めていく。

