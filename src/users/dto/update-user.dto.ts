import { IsNumber } from 'class-validator';

export class UpdateUserDto {
  @IsNumber()
  role: number;

  @IsNumber()
  age: number;
}
