import { useState } from 'react';
import { createKissa } from '../api/kissa';

const KissaForm = () => {
    const [name, setName] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [openingHours, setOpeningHours] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>("");
    const [tags, setTags] = useState<string>("");
    const [latitude, setLatitude] = useState<string>("");
    const [longitude, setLongitude] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const newKissa = {
                name,
                address,
                opening_hours: openingHours,
                description,
                image_url: imageUrl,
                tags: tags.split(",").map((tag) => tag.trim()),
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude),
            };

            const createdKissa = await createKissa(newKissa);
            setMessage(`「${createdKissa.name}」を登録しました!`);
            setName("");
            setAddress("");
            setOpeningHours("");
            setDescription("");
            setImageUrl("");
            setTags("");
            setLatitude("");
            setLongitude("");
        } catch (err) {
            console.error(err);
            console.error(err.response.data);
            setMessage("登録に失敗しました");
        }
    };

    return (
        <div>
          <h2>喫茶店を登録</h2>
          {message && <p>{message}</p>}
          <form onSubmit={handleSubmit}>
            <label>
              名前:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
              住所:
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </label>
            <label>
              営業時間:
              <input type="text" value={openingHours} onChange={(e) => setOpeningHours(e.target.value)} />
            </label>
            <label>
              説明:
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
              画像URL:
              <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            </label>
            <label>
              タグ（カンマ区切り）:
              <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
            </label>
            <label>
              緯度:
              <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} required />
            </label>
            <label>
              経度:
              <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} required />
            </label>
            <button type="submit">登録</button>
          </form>
        </div>
    );
};

export default KissaForm;