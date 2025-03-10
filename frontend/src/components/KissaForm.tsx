import '../styles/global.css';
import { useState, useEffect } from 'react';
import { createKissa, Kissa } from '../api/kissa';

type Props = {
  onKissaAdded: (newKissa: Kissa) => void;
}

// APIエラーの型をより具体的に定義
interface ApiError {
  response: {
    data: {
      message?: string;
      errors?: Record<string, string[]>;
    };
    status?: number;
    statusText?: string;
  };
}

const KissaForm = ({ onKissaAdded }: Props) => {
    const [name, setName] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [openingHours, setOpeningHours] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>("");
    const [tags, setTags] = useState<string>("");
    const [latitude, setLatitude] = useState<string>("");
    const [longitude, setLongitude] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    // デバッグ用のuseEffect
    useEffect(() => {
        console.log("Current message:", message);
    }, [message]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // newKissaの型を明示的に定義し、Omit<Kissa, "id">に合わせる
            const newKissa: Omit<Kissa, "id"> = {
                name,
                address,
                opening_hours: openingHours,
                description,
                image_url: imageUrl,
                tags: tags.split(",").map((tag) => tag.trim()).filter(tag => tag !== ""),
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude),
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            };

            const createdKissa = await createKissa(newKissa);
            onKissaAdded(createdKissa);

            setMessage(`「${createdKissa.name}」を登録しました!`);
            setName("");
            setAddress("");
            setOpeningHours("");
            setDescription("");
            setImageUrl("");
            setTags("");
            setLatitude("");
            setLongitude("");
        } catch (err: unknown) {
            console.error("Error occurred:", err);
            
            // ApiErrorインターフェースを使用
            if (err && typeof err === 'object' && 'response' in err) {
                const apiError = err as ApiError;
                console.error("API Error data:", apiError.response.data);
                
                // エラーメッセージをより具体的に表示
                if (apiError.response.data.message) {
                    setMessage(`エラー: ${apiError.response.data.message}`);
                } else if (apiError.response.status === 400) {
                    setMessage("入力データに問題があります");
                } else {
                    setMessage("登録に失敗しました");
                }
            } else {
                console.log("Setting unexpected error message");
                setMessage("予期せぬエラーが発生しました");
            }
        }
    };

    return (
        <div className="kissa-form-container">
          <h2>喫茶店を登録</h2>
          {message && (
            <div className="message-container">
              <p className="message">{message}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="kissa-form">
            <div className="form-group">
              <label htmlFor="name">名前:</label>
              <input 
                id="name"
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">住所:</label>
              <input 
                id="address"
                type="text" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="openingHours">営業時間:</label>
              <input 
                id="openingHours"
                type="text" 
                value={openingHours} 
                onChange={(e) => setOpeningHours(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">説明:</label>
              <textarea 
                id="description"
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="imageUrl">画像URL:</label>
              <input 
                id="imageUrl"
                type="text" 
                value={imageUrl} 
                onChange={(e) => setImageUrl(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="tags">タグ（カンマ区切り）:</label>
              <input 
                id="tags"
                type="text" 
                value={tags} 
                onChange={(e) => setTags(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="latitude">緯度:</label>
              <input 
                id="latitude"
                type="text" 
                value={latitude} 
                onChange={(e) => setLatitude(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="longitude">経度:</label>
              <input 
                id="longitude"
                type="text" 
                value={longitude} 
                onChange={(e) => setLongitude(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="submit-button">登録</button>
          </form>
        </div>
    );
};

export default KissaForm;