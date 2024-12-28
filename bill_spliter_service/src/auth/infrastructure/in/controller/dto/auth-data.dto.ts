export class AuthDataDto {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly name: string,
    public readonly lastName: string,
    public readonly role: string,
  ) {}
}
