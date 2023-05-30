import { UserResponseDTO } from '../dtos/UserResponseDTO';
import { UserRequestDTO } from '../dtos/UserRequestDTO';

export abstract class UserRepository {
  abstract create(data: UserRequestDTO): Promise<UserResponseDTO>;
  abstract get(): Promise<UserResponseDTO[]>;
}
