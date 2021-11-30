import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Medicine } from './entity/medicine.entity';
import { User } from './entity/user.entity';

@Module({
  imports: [
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
