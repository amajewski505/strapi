import api from "./axios";

export async function fetchFromStrapi<T>(endpoint: string): Promise<T> {
    const response = await api.get<T>(endpoint);
    return response.data;
}

export function getStrapiMedia(url: string): string {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
    return url.startsWith("/") ? `${baseUrl}${url}` : url;
}