import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { AppRoutes } from "../app/routes/AppRoutes";
import { useCheckAuth } from "../hooks";

export const AppRouter = () => {
    const navigate = useNavigate();
    const [sessionStatus, setSessionStatus] = useState("checking");

    const { authStatus } = useCheckAuth();
    useEffect(() => {
        setSessionStatus(authStatus);
    }, [authStatus]);
    return (
        <Routes>
            {/* Login y Registro */}
            {sessionStatus !== "authenticated" && (
                <>
                    <Route path="/auth/*" element={<AuthRoutes />} />
                    <Route path="/*" element={<Navigate to={"/auth"} />} />
                </>
            )}

            {/* MainApp */}
            {sessionStatus === "authenticated" && <Route path="/*" element={<AppRoutes />} />}
        </Routes>
    );
};
