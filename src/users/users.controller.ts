/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUsersDTO } from './DTO/CreateUsersDto';
import { UsersEntity } from './users.entity';
import { v4 as uuid } from 'uuid';
import { ListUsersDTO } from './DTO/ListUsersDTO';
import { UpdateUsersDTO } from './DTO/UpdateUsersDTO';

@Controller('/users')
export class UserController {

  constructor(private usersRepository: UsersRepository) { }

  @Post()
  async createUser(@Body() userData: CreateUsersDTO) {
    const usersEntity = new UsersEntity();
    usersEntity.name = userData.name;
    usersEntity.email = userData.email;
    usersEntity.password = userData.password;
    usersEntity.id = uuid();

    this.usersRepository.save(usersEntity)

    return {
      users: new ListUsersDTO(usersEntity.id, usersEntity.name),
      message: 'User created successfully'
    }
  }

  @Get()
  async listUsers() {
    const savedUsers = await this.usersRepository.list();
    const listUsers = savedUsers.map(
      users => new ListUsersDTO(
        users.id,
        users.name
      )
    );
    return listUsers
  }

  @Put('/:id')
  async updateUsers(@Param('id') id: string, @Body() newData: UpdateUsersDTO) {
    const usersUpdated = await this.usersRepository.update(id, newData)
    return {
      users: usersUpdated,
      message: 'User updated successfully'
    }
  }

  @Delete('/:id')
  async deleteUsers(@Param('id') id: string) {

    const deletedUsers = await this.usersRepository.delete(id);

    return {
      users: deletedUsers,
      message: 'User deleted successfully'
    }
  }
}
