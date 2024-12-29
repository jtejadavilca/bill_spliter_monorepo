export interface CreateGroupResponse {
    id: string;
    userId: string;
    code: string;
    name: string;
    numMembers: number;
    groupType: string;
    totalAmount: number;
}