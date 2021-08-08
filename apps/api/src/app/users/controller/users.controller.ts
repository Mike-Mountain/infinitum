import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserEntity } from '../models/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {
  }

  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  get(@Param() params) {
    return this.usersService.getUserByID(params.id);
  }

  @Post()
  create(@Body() user: UserEntity) {
    return this.usersService.createUser(user);
  }

  @Put()
  update(@Body() user: UserEntity) {
    return this.usersService.updateUser(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Param() params) {
    return this.usersService.deleteUser(params.id);
  }
}
