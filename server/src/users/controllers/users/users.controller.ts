import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/CreateUser.dto';
import { upDateUserDto } from 'src/dtos/updateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  async getUsers() {
    const users = await this.userService.findUsers();
    return users;
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUsers(@Body() userInfo: CreateUserDto) {
    const userDetails = this.userService.CreateUser(userInfo);
    return userDetails;
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUser: upDateUserDto,
  ) {
    return await this.userService.upDateUser(id, updateUser);
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.deleteUser(id);
  }
}
