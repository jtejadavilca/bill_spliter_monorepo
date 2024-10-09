export class GetGroupDto {
  id: string;
  userId: string;
  name: string;
  numMembers: number;
  groupType: string;
  totalAmount: number;
  enabled: boolean;
  createdAt: Date;
}
