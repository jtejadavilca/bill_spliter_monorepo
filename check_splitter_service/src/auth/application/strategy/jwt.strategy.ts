import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from 'jsonwebtoken';

import { ConfigService } from '@nestjs/config';
import { Inject, UnauthorizedException } from '@nestjs/common';

import { AuthService } from '../service/auth.service';
import { UserModel } from 'src/auth/core/domain/models/user.model';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(AuthService)
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super({
      secretOrKey: configService.get('JWT_SECRET'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
    });
  }

  async validate(payload: JwtPayload): Promise<UserModel> {
    const { id } = payload;
    const user = await this.authService.getUserById(id);

    if (!user) {
      throw new UnauthorizedException('Token not valid');
    }

    if (!user.enabled) {
      throw new UnauthorizedException('User is not active');
    }

    //return { userId: payload.sub, username: payload.username };
    return user;
  }
}
