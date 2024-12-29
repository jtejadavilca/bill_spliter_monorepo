export interface User {
    id: string;
    email: string;
    name: string;
    lastName: string;
    role: Roles;
}

export type Roles = "ADMIN" | "USER" | "GUEST";
