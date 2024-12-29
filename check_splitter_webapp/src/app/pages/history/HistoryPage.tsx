import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { AppLayout } from "../../layout/AppLayout";
import { TableGroups } from "../../components";
import { Group } from "../../../interfaces";
import { apiGetGroups } from "../../../api";

export const HistoryPage = () => {
    const [groups, setGroups] = useState<Group[]>([]);
    const [page, setPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getGroups = async () => {
            try {
                const groupsFromService = await apiGetGroups(page);
                setGroups(groupsFromService);
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Error loading groups",
                });
            } finally {
                setIsLoading(false);
            }
        };

        getGroups();
    }, [page]);

    return (
        <AppLayout>
            <TableGroups groups={groups} isLoading={isLoading} />
        </AppLayout>
    );
};
