export interface CreateUserParams {
  id: number;
  name: string;
  age: number;
  role: number;
}

export interface UpdateUserParams {
  role: number;
  age: number;
}
