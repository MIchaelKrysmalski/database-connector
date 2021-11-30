import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicine } from 'src/entity/medicine.entity';
import { User } from 'src/entity/user.entity';
import { MedicineController } from './medicine.controller';
import { MedicineService } from './medicine.service';

@Module({
  imports: [TypeOrmModule.forFeature([Medicine, User])],
  providers: [MedicineService],
  controllers: [MedicineController],
})
export class MedicineModule {}
