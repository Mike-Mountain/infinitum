import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthUserDto, CreateUserDto } from '../../users/models/user.dto';
import { LoginStatus, RegistrationStatus } from '../models/auth.model';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('register')
  public async register(@Body() user: CreateUserDto): Promise<RegistrationStatus> {
    const result: RegistrationStatus = await this.authService.registerUser(user);
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Post('login')
  public async login(@Body() user: AuthUserDto): Promise<LoginStatus> {
    return await this.authService.login(user);
  }
}
