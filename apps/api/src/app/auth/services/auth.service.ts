import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthUserDto, CreateUserDto, UserDto } from '../../users/models/user.dto';
import { JwtPayload } from 'jsonwebtoken';
import { LoginStatus, RegistrationStatus } from '../models/auth.model';

@Injectable()
export class AuthService {

  constructor(private usersService: UsersService, private readonly jwtService: JwtService) {
  }

  public async registerUser(user: CreateUserDto): Promise<RegistrationStatus> {
    const status: RegistrationStatus = {
      success: true,
      message: 'user registered'
    };
    try {
      await this.usersService.createUser(user);
    } catch (err) {
      status.success = false;
      status.message = err;
    }
    return status;
  }

  public async login(user: AuthUserDto): Promise<LoginStatus> {
    const dbUser = await this.usersService.getAuthenticatedUser(user);
    const token = this.createToken(dbUser);

    return {
      username: dbUser.username,
      ...token
    };
  }

  async validateLocalUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUserByUsername(username);

    if (user) {
      // TODO: Validate User.
      // const {password, ...result} = user;
      // return result;
    }

    return null;
  }

  async validateJwtUser(payload: JwtPayload): Promise<UserDto> {
    const user = await this.usersService.findByPayload(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  private createToken(user: UserDto): any {
    const jwtUser: JwtPayload = { username: user.username };
    const accessToken = this.jwtService.sign(jwtUser);
    return {
      expiresIn: process.env.EXPIRESIN,
      accessToken,
    };
  }
}
