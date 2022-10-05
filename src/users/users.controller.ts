import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  fetchUsers() {
    return this.usersService.fetchUsers();
  }
  @Get('/query')
  fetchUsersByQuery(
    @Query('offset') offset: number,
    @Query('limit') limit: number,
  ) {
    return this.usersService.fetchUsersByQuery(offset, limit);
  }

  @Get('/:id')
  fetchUser(@Param('id') id: number) {
    return this.usersService.fetchUser(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number): boolean {
    return this.usersService.deleteUser(id);
  }

  @Put('/:id')
  updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): boolean {
    return this.usersService.updateUser(id, updateUserDto);
  }
}
