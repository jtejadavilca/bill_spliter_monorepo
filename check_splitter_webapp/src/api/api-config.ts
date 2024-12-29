import axios from "axios";

export const checkSplitterApi = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export const checkSplitterSecuredApi = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

checkSplitterSecuredApi.interceptors.request.use((config) => {
    const authStoraged = localStorage.getItem("auth") ?? "{}";
    const { state } = JSON.parse(authStoraged);
    const token = state.token;

    config.headers.Authorization = `Bearer ${token}`;
    return config;
});
