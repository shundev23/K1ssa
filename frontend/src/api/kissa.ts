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

    // 新しい喫茶店を追加
    export const createKissa = async (kissa: Omit<Kissa, "id" | "created_at" | "updated_at">
    ): Promise<Kissa> => {
        const response = await apiClient.post<Kissa>("/kissa", kissa);
        return response.data;
    }