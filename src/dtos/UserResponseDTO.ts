export class UserResponseDTO {
  id: number;
  name: string;
  email: string;
  createdAt: Date;

  static fromEntity(user: UserResponseDTO): UserResponseDTO {
    const response = new UserResponseDTO();
    response.id = user.id;
    response.name = user.name;
    response.email = user.email;
    response.createdAt = user.createdAt;
    return response;
  }
}
