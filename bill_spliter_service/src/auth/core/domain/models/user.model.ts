export type Role = 'ADMIN' | 'USER';

export class UserModel {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly password: string,
    public readonly role: Role,
    public readonly enabled: boolean,
    public readonly createdAt: Date,
  ) {}
}
