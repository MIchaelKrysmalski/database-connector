import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { LoginUserDto } from 'src/dto/login-user.dto';
import { UpdateUserMedicineDto } from 'src/dto/update-user-medicine.dto';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne(id, { relations: ['medicine'] });
  }
  async create(createUserDto: CreateUserDto) {
    const user = new User();
    user.email = createUserDto.email;
    user.medicine = [];
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    await this.userRepository.save(user);
  }
  async update(id: number, updateUserMedicine: UpdateUserMedicineDto) {
    const user = await this.userRepository.findOne(id);
    user.medicine = updateUserMedicine.medicine;
    this.userRepository.save(user);
  }
  async delete(id: number) {
    await this.userRepository.delete(id);
  }
  async checkUsernameAndPassword(loginDto: LoginUserDto) {
    const user = await this.userRepository.findOne({
      username: loginDto.username,
    });
    return user;
  }
}
