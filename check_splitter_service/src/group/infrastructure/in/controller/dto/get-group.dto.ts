export class GetGroupDto {
  id: string;
  userId: string;
  code: string;
  name: string;
  numMembers: number;
  groupType: string;
  totalAmount: number;
  enabled: boolean;
  createdAt: Date;
}
