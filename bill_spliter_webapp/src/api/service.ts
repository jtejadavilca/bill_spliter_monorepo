import axios from "axios";
import { AuthResponse } from "../interfaces";

export const checkSplitterApi = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export const apiLogin = async (email: string, password: string): Promise<AuthResponse> => {
    try {
        const response = await checkSplitterApi.post<AuthResponse>("/auth/login", {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error("apiLogin", error);
        return { token: null, data: null };
    }
};
