export class GroupModel {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly code: string,
    public readonly name: string,
    public readonly numMembers: number,
    public readonly groupType: string,
    public readonly totalAmount: number,
    public readonly enabled: boolean,
    public readonly createdAt: Date,
  ) {}
}
