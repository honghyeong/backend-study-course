import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsNumber()
  role: number;
}
