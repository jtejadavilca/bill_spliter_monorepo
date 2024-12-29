import { AxiosError } from "axios";
import { checkSplitterSecuredApi } from "./api-config";
import { CreateGroupRequest, CreateGroupResponse } from "./interfaces";
import { Group } from "../interfaces";

export const apiCreateGroup = async (createGroupRequest: CreateGroupRequest): Promise<CreateGroupResponse> => {
    try {
        const response = await checkSplitterSecuredApi.post<CreateGroupResponse>("/groups", { ...createGroupRequest });
        return response.data;
    } catch (error) {
        console.error("Error creating group", error);
        if (error instanceof AxiosError && error.status === 401) {
            throw new Error("Unauthorized");
        }
        throw new Error("Error creating group");
    }
};

export const apiGetGroups = async (page: number): Promise<Group[]> => {
    try {
        const response = await checkSplitterSecuredApi.get<Group[]>("/groups", { params: { page } });
        return response.data;
    } catch (error) {
        console.error("Error getting groups", error);
        throw new Error("Error getting groups");
    }
};
