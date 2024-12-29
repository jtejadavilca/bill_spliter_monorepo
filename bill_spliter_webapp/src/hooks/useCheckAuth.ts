import { useAuthStore } from "../store";

export const useCheckAuth = () => {
    const authStatus = useAuthStore((state) => state.status);
    const user = useAuthStore((state) => state.user);
    const fnLogout = useAuthStore((state) => state.logout);

    return { authStatus, user, fnLogout };
};
