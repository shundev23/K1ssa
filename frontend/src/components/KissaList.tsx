import {useEffect, useState} from 'react';
import {Kissa, fetchKissaList} from '../api/kissa';
import { Link } from 'react-router-dom';

const KissaList = () => {
    const [kissas, setKissas] = useState<Kissa[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const loadKissas = async () => {
            try {
                const data = await fetchKissaList();
                setKissas(data);
            } catch (err) {
                setError(new Error("データの取得に失敗しました"));
            } finally {
                setLoading(false);
            }
        };
        loadKissas();
    }
    , []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;
    

    return (
        <div>
            <h2>喫茶店一覧</h2>
            <ul>
                {kissas.map((kissa) => (
                    <li key={kissa.id}>
                        <Link to={`/kissa/${kissa.id}`}>
                        <h3>{kissa.name}</h3>
                        </Link>
                        <img src={kissa.image_url} alt={kissa.name} />
                        <h3>{kissa.name}</h3>
                        <p>{kissa.address}</p>
                        <p>{kissa.description}</p>
                        {kissa.image_url && <img src={kissa.image_url} alt={kissa.name} width={"200"}/>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default KissaList;