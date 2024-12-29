export interface CreateGroupRequest {
    userId: string;
    code: string;
    name: string;
    numMembers: number;
    groupType: string;
    totalAmount: number;
}
