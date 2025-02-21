import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchKissaDetail, Kissa } from "../api/kissa";

const KissaDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [kissa, setKissa] = useState<Kissa | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadKissa = async () => {
      try {
        if (id) {
          const data = await fetchKissaDetail(Number(id));
          setKissa(data);
        }
      } catch (err) {
        setError("データの取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };

    loadKissa();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!kissa) return <p>データが見つかりません</p>;

  return (
    <div>
      <h2>{kissa.name}</h2>
      <p>住所: {kissa.address}</p>
      <p>営業時間: {kissa.opening_hours}</p>
      <p>{kissa.description}</p>
      {kissa.image_url && <img src={kissa.image_url} alt={kissa.name} width="300" />}
      <p>タグ: {kissa.tags.join(", ")}</p>
    </div>
  );
};

export default KissaDetail;
