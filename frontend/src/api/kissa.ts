import apiClient from "./apiClient";

export type Kissa = {
    id: number;
    name: string;
    address: string;
    opening_hours: string;
    description: string;
    image_url: string;
    tags: string[];
    latitude: number;
    longitude: number;
    created_at: string;
    updated_at: string;
    };

    // 喫茶店一覧を取得
    export const fetchKissaList = async (): Promise<Kissa[]> => {
        const response = await apiClient.get<Kissa[]>("/kissa");
        return response.data;
    }

    // 喫茶店詳細を取得
    export const fetchKissaDetail = async (id: number): Promise<Kissa> => {
        const response = await apiClient.get<Kissa>(`/kissa/${id}`);
        return response.data;
    }

    // 送信用のデータ型を定義
    export type KissaInput = Omit<Kissa, "id" | "created_at" | "updated_at">;

    // 関数の型を変更
    export const createKissa = async (kissaData: KissaInput): Promise<Kissa> => {
        const response = await apiClient.post<Kissa>("/kissas", kissaData);
        return response.data;
    }