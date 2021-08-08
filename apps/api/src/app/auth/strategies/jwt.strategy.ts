import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../services/auth.service';
import { JwtPayload } from 'jsonwebtoken';
import { UserDto } from '../../users/models/user.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "60e3ad7e-a873-4f7d-920d-83a623924525"
    });
  }

  public async validate(payload: JwtPayload): Promise<UserDto> {
    console.log("Validating JWT User with service: ", this.authService);
    const user = await this.authService.validateJwtUser(payload);
    console.log(user);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}


// {
//   "username": "Mike",
//   "password": "Redant09",
//   "email": "Mikemountain.dev@gmail.com",
//   "firstName": "Michael",
//   "lastName": "Mountain"
// }

// {
//   "username": "Test",
//   "password": "TestPass",
//   "email": "test@test.com",
//   "firstName": "James",
//   "lastName": "Test"
// }
