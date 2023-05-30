import { IsNotEmpty, Length } from 'class-validator';

export class UserRequestDTO {
  @IsNotEmpty({
    message: 'Name is required',
  })
  @Length(3, 50, {
    message: 'Name must be between 3 and 50 characters',
  })
  name: string;
  email: string;
  password: string;
}
