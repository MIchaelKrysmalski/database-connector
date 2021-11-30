import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Medicine } from './entity/medicine.entity';
import { User } from './entity/user.entity';
import { MedicineController } from './medicine/medicine.controller';
import { MedicineModule } from './medicine/medicine.module';
import { MedicineService } from './medicine/medicine.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'my-database-storage.ce22xfrrhvz4.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: '9yodKvTvkMHkx1gjFU9Y',
      database: 'MedicineStorageReminder',
      entities: [User, Medicine],
      synchronize: true,
    }),
    UserModule,
    MedicineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
