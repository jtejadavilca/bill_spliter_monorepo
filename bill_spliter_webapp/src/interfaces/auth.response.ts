import { Roles } from "./user.interface";

export interface AuthResponse {
    token?: string | null;
    data?: Data | null;
}

export interface Data {
    id: string;
    email: string;
    name: string;
    lastName: string;
    role: Roles;
}
