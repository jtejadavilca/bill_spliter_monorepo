import { checkSplitterApi } from "./api-config";
import { CreateGroupRequest, CreateGroupResponse } from "./interfaces";

export const apiCreateGroup = async (createGroupRequest: CreateGroupRequest): Promise<CreateGroupResponse | null> => {
    try {
        const response = await checkSplitterApi.post<CreateGroupResponse>("/groups", { ...createGroupRequest });
        return response.data;
    } catch (error) {
        console.error("apiLogin", error);
        return null;
    }
};
