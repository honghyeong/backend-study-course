import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserParams, UpdateUserParams } from './users.param';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepositry: Repository<User>,
  ) {}

  async fetchUsers() {
    return this.usersRepositry.find();
  }

  async fetchUser(id: number) {
    return this.usersRepositry.findOne(id);
  }

  // fetchUsersByQuery(offset, limit) {
  //   const os = parseInt(offset);
  //   const li = parseInt(limit);
  //   const fetchUsers = [];
  //   for (let i = os; i < os + li; i++) {
  //     fetchUsers.push(this.users[i]);
  //   }
  //   return fetchUsers;
  // }

  async createUser(newUser: CreateUserParams) {
    this.usersRepositry.save(newUser);
    return newUser;
  }

  async deleteUser(id: number) {
    const deletedUser = await this.usersRepositry.delete(id);
    return deletedUser;
  }

  async updateUser(id: number, updateUserDto: UpdateUserParams) {
    const updatedUser = this.usersRepositry.update(id, {
      role: updateUserDto.role,
      age: updateUserDto.age,
    });
    return updatedUser;
  }
}
