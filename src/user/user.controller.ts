import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { LoginUserDto } from 'src/dto/login-user.dto';
import { UpdateUserMedicineDto } from 'src/dto/update-user-medicine.dto';
import { UpdateDateColumn } from 'typeorm';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    this.userService.create(createUserDto);
    return createUserDto;
  }
  @Get(':id')
  getUser(@Param('id') id: number) {
    const user = this.userService.findOne(id);
    return user;
  }
  @Post('/login')
  async checkUsernameAndPassword(@Body() loginDto: LoginUserDto) {
    const result = await this.userService.checkUsernameAndPassword(loginDto);
    return result;
  }
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserMedicineDto: UpdateUserMedicineDto,
  ) {
    this.userService.update(id, updateUserMedicineDto);
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    this.userService.delete(id);
  }
}
