import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { TokenDto } from './dto/token.dto';
import { AuthService } from 'src/auth/application/service/auth.service';
import { JwtService } from '@nestjs/jwt';
import { UserOutputMapper } from '../mapper/user.output.mapper';
import { RegisterDto } from './dto/register.dto';
import { UserInputMapper } from '../mapper/user.input.mapper';
import * as bcrypt from 'bcrypt';
import { UserModel } from 'src/auth/core/domain/models/user.model';
import { UserAlreadyExistsException } from 'src/auth/core/exceptions/user/user_already_exists.exception';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<TokenDto> {
    const userModel = await this.authService.findByEmailAndPassword(
      loginDto.email,
      loginDto.password,
    );

    if (!userModel) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.buildToken(userModel);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<TokenDto> {
    try {
      const userModel = await this.authService.create(
        UserInputMapper.mapToUserModel(
          registerDto,
          bcrypt.hashSync(registerDto.password, 10),
        ),
      );
      return this.buildToken(userModel);
    } catch (error) {
      if (error instanceof UserAlreadyExistsException) {
        throw new BadRequestException('User already exists');
      }
    }
  }

  private buildToken(userModel: UserModel): TokenDto {
    const payload = UserOutputMapper.toTokenPayloadDto(userModel);
    return new TokenDto(this.jwtService.sign({ ...payload }));
  }
}
