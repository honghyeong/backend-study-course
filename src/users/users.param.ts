import { Role } from './users.enum';

export interface CreateUserParams {
  name: string;
  age: number;
  role: Role;
}

export interface UpdateUserParams {
  role: Role;
  age: number;
}
