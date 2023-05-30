import { Injectable } from '@nestjs/common';
import { UserRequestDTO } from '../dtos/UserRequestDTO';
import { UserResponseDTO } from '../dtos/UserResponseDTO';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(body: UserRequestDTO): Promise<UserResponseDTO> {
    const user = await this.userRepository.create(body);

    return UserResponseDTO.fromEntity(user);
  }

  async getUsers(): Promise<UserResponseDTO[]> {
    const users = await this.userRepository.get();

    return users;
  }
}
