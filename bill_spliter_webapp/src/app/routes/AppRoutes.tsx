import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { AppPage } from "../pages/AppPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AppPage />} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};
