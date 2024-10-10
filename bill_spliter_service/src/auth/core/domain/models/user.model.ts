import { ValidRoles } from './enum/valid_roles.enum';

export class UserModel {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly password: string,
    public readonly role: ValidRoles,
    public readonly enabled: boolean,
    public readonly createdAt: Date,
  ) {}
}
