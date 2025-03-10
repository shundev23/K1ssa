import KissaList from "../components/KissaList";
import KissaForm from "../components/KissaForm";
import { useState, useEffect } from "react";
import { Kissa, fetchKissaList } from "../api/kissa";

function Home() {
    const [kissas, setKissas] = useState<Kissa[]>([]);

    //喫茶リストを取得
    useEffect(() => {
        const loadKissas = async() => {
            const data = await fetchKissaList();
            setKissas(data);
        };
        loadKissas();
    }, []);

    // 新しい喫茶店を追加
    const handleKissaAdded = (newKissa: Kissa) => {
        setKissas((prev) => [newKissa, ...prev]);
    };

    return (
    <div>
        <h1>Home Page</h1>
        <KissaForm onKissaAdded={handleKissaAdded} />
        <KissaList kissas={kissas}/>  
    </div>
    );
}

export default Home;