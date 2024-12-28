import { useAuthStore } from "../store";

export const useCheckAuth = () => {
    const authStatus = useAuthStore((state) => state.status);

    return { authStatus };
};
