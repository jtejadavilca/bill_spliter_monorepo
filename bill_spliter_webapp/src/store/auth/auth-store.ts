import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../../interfaces";

type AuthStatus = "checking" | "authenticated" | "not-authenticated";
interface AuthStore {
    status: AuthStatus; // "checking" | "authenticated" | "not-authenticated"
    user: User | null;
    token: string | null;
    setUser: (user: User, token: string) => void;
    getUser: () => User | null;
    logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set, get) => ({
            status: "checking",
            user: null,
            token: null,
            setUser: (user: User, token: string) => set({ status: "authenticated", user, token }),
            getUser: (): User | null => {
                const state = get();
                return state.user;
            },
            logout: () => set({ status: "not-authenticated", user: null, token: null }),
        }),
        { name: "auth" }
    )
);
