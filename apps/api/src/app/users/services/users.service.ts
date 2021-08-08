import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../models/user.entity';
import { Repository } from 'typeorm';
import { AuthUserDto, CreateUserDto, UserDto } from '../models/user.dto';
import { compare, hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {
  }

  public async getAuthenticatedUser({ username, password }: AuthUserDto): Promise<UserDto> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) {
      throw new HttpException('User not found!', HttpStatus.UNAUTHORIZED);
    }

    const isEqual = await compare(password, user.password);

    if (!isEqual) {
      throw new HttpException('Incorrect Credentials!!', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  public async findByPayload({ username }: any): Promise<UserDto> {
    return await this.userRepository.findOne({
      where: { username }
    });
  }

  public getAllUsers(): Promise<UserDto[]> {
    return this.userRepository.find();
  }

  public getUserByID(id: string): Promise<UserDto> {
    return this.userRepository.findOne(id);
  }

  public getUserByUsername(username: string): Promise<UserDto> {
    return this.userRepository.findOne(username);
  }

  async createUser(user: CreateUserDto): Promise<UserDto> {
    const exists = await this.userRepository.findOne({where: {username: user.username}});
    if (exists) {
      throw new HttpException('User already exists!', HttpStatus.BAD_REQUEST);
    }

    const entity: UserEntity = await this.userRepository.create(user);
    await this.userRepository.save(entity);
    return user;
  }

  async updateUser(user: UserDto): Promise<UserDto> {
    const exists = await this.userRepository.findOne({where: {username: user.username}});
    if (!exists) {
      throw new HttpException('User not found!', HttpStatus.BAD_REQUEST);
    }
    await this.userRepository.save(user);
    return user;
  }

  public async deleteUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
