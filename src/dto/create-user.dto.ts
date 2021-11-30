import { Medicine } from 'src/entity/medicine.entity';

export class CreateUserDto {
  username: string;

  email: string;

  password: string;

  medicine: Medicine[];
}
