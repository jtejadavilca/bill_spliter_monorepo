export class TokenPayloadDto {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly role: string,
    public readonly name: string,
    public readonly lastName: string,
  ) {}
}
