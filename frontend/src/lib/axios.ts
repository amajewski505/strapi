import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const customMessage =
            error.response?.data?.error?.message ||
            error.response?.data?.message ||
            error.message ||
            "Unknown error occured!";

        return Promise.reject(new Error(customMessage));
    }
);

export default api;
