import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRequestDTO } from '../dtos/UserRequestDTO';
import { UserResponseDTO } from '../dtos/UserResponseDTO';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body: UserRequestDTO): Promise<UserResponseDTO> {
    return await this.userService.createUser(body);
  }

  @Get()
  async getUsers(): Promise<UserResponseDTO[]> {
    return await this.userService.getUsers();
  }
}
