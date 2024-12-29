import { AuthDataDto } from './auth-data.dto';

export class AuthResponse {
  constructor(
    public readonly token: string,
    public readonly data: AuthDataDto,
  ) {}
}
