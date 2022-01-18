import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { UserModule } from './user.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Medicine } from 'src/entity/medicine.entity';

describe('UserController', () => {
  let userController: UserController;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
      imports: [
        UserModule,
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'root',
          password: 'root',
          database: 'test_db',
          entities: [User, Medicine],
          synchronize: true,
        }),
      ],
    }).compile();
    userController = app.get<UserController>(UserController);
  });
  describe('/user', () => {
    it('create a user', () => {
      expect(
        userController.create({
          username: 'username',
          email: 'email@email.de',
          password: 'password',
          medicine: [],
        }),
      ).toBe({
        username: 'username',
        email: 'email@email.de',
        password: 'password',
        medicine: [],
      });
    });
  });
});
