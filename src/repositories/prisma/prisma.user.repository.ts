import { UserRepository } from '../user.repository';
import { UserRequestDTO } from '../../dtos/UserRequestDTO';
import { UserResponseDTO } from '../../dtos/UserResponseDTO';
import { PrismaService } from '../../database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: UserRequestDTO): Promise<UserResponseDTO> {
    const user = await this.prisma.user.create({
      data,
    });

    return UserResponseDTO.fromEntity(user);
  }

  async get(): Promise<UserResponseDTO[]> {
    const users = await this.prisma.user.findMany();
    const result = users.map((user) => UserResponseDTO.fromEntity(user));
    return result;
  }
}
