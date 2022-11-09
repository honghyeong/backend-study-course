import { IsEnum, IsNumber, IsString } from 'class-validator';
import { Role } from './users.enum';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsEnum(Role)
  role: Role;
}

export class UpdateUserDto {
  @IsEnum(Role)
  role: Role;

  @IsNumber()
  age: number;
}
