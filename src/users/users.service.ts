import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  users = [
    { id: 0, name: 'seokmin', age: 26, role: 0 },
    { id: 1, name: 'youhyeok', age: 40, role: 1 },
    { id: 2, name: 'yeondon', age: 40, role: 1 },
    { id: 3, name: 'hanjoo', age: 24, role: 0 },
    { id: 4, name: 'sangyup', age: 24, role: 0 },
    { id: 5, name: 'seokwon', age: 24, role: 0 },
  ];

  fetchUsers() {
    return this.users;
  }

  fetchUser(id: number) {
    let findUser;
    this.users.forEach((user) => {
      if (user.id == id) {
        findUser = user;
      }
    });

    return findUser;
  }

  fetchUsersByQuery(offset, limit) {
    const os = parseInt(offset);
    const li = parseInt(limit);
    const fetchUsers = [];
    for (let i = os; i < os + li; i++) {
      fetchUsers.push(this.users[i]);
    }
    return fetchUsers;
  }

  createUser(newUser: CreateUserDto) {
    this.users.push(newUser);
    console.log(this.users);
    return true;
  }

  deleteUser(id: number) {
    console.log(this.users);
    const filteredUsers = this.users.filter((user) => {
      if (user.id != id) {
        return user;
      }
    });

    this.users = filteredUsers;
    console.log(this.users);
    return true;
  }

  updateUser(id: number, updateInfo: { age: number; role: number }) {
    const updatedUsers = [];
    console.log(this.users);
    this.users.forEach((user) => {
      if (user.id == id) {
        updatedUsers.push({
          id: user.id,
          name: user.name,
          age: updateInfo.age,
          role: updateInfo.role,
        });
      } else {
        updatedUsers.push(user);
      }
    });

    this.users = updatedUsers;
    console.log(this.users);
    return true;
  }
}
