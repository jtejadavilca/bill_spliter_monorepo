import axios from "axios";
import { AuthResponse, LoginRequest, RegisterRequest } from "../interfaces";

export const checkSplitterApi = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export const apiLogin = async ({ email, password }: LoginRequest): Promise<AuthResponse> => {
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

export const apiRegister = async (registerRequest: RegisterRequest): Promise<AuthResponse> => {
    try {
        const { email, password, name, lastName } = registerRequest;

        const response = await checkSplitterApi.post<AuthResponse>("/auth/register", {
            email,
            password,
            name,
            lastName,
        });
        return response.data;
    } catch (error) {
        console.error("apiRegister", error);
        return { token: null, data: null };
    }
};
