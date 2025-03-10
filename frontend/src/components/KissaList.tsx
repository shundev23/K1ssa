import { Kissa } from '../api/kissa';
import { Link } from 'react-router-dom';

type Props = {
    kissas: Kissa[];
}

const KissaList = ({kissas}: Props) => {
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