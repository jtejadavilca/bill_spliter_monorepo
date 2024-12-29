import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { AppPage, GroupsPage, HistoryPage } from "../pages";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AppPage />} />
            <Route path="/groups" element={<GroupsPage />} />
            <Route path="/history" element={<HistoryPage />} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};
