import { checkSplitterSecuredApi } from "./api-config";
import { CreateGroupRequest, CreateGroupResponse } from "./interfaces";

export const apiCreateGroup = async (createGroupRequest: CreateGroupRequest): Promise<CreateGroupResponse> => {
    try {
        const response = await checkSplitterSecuredApi.post<CreateGroupResponse>("/groups", { ...createGroupRequest });
        return response.data;
    } catch (error) {
        console.error("Error creating group", error);
        throw new Error("Error creating group");
    }
};
