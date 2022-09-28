import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users = ['gil-dong', 'seokmin'];

  getUsers() {
    return this.users;
  }
}
