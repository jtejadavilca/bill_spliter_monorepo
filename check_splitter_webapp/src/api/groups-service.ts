import { checkSplitterSecuredApi } from "./api-config";
import { CreateGroupRequest, CreateGroupResponse } from "./interfaces";

export const apiCreateGroup = async (createGroupRequest: CreateGroupRequest): Promise<CreateGroupResponse | null> => {
    try {
        const response = await checkSplitterSecuredApi.post<CreateGroupResponse>("/groups", { ...createGroupRequest });
        return response.data;
    } catch (error) {
        return null;
    }
};
