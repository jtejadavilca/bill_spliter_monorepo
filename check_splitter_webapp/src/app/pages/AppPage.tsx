import React from "react";
import { AppLayout } from "../layout/AppLayout";
import { CreateGroupForm, JoinGroupForm } from "../components";

export const AppPage = () => {
    return (
        <AppLayout>
            <div className="rounded w-full max-w-96 mx-auto p-4 bg-white dark:bg-gray-800">
                <JoinGroupForm />
                <CreateGroupForm />
            </div>
        </AppLayout>
    );
};
