export class CreateUserDto {
  id: string;
  password: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}

export type AuthUserDto = Pick<CreateUserDto, 'username' | 'password'>;
export type UserDto = Omit<CreateUserDto, 'password'>;
