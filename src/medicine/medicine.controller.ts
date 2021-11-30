import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateMedicineDto } from 'src/dto/create-medicine.dto';
import { UpdateMedicineDto } from 'src/dto/update-medicine.dto';
import { Medicine } from 'src/entity/medicine.entity';
import { UpdateEvent } from 'typeorm';
import { MedicineService } from './medicine.service';

@Controller('medicine')
export class MedicineController {
  constructor(private readonly medicineService: MedicineService) {}
  @Get()
  getAll() {
    return 1;
  }
  @Get(':id')
  async getById(@Param('id') id: number): Promise<Medicine> {
    const medicine = this.medicineService.getById(id);
    return medicine;
  }
  @Post(':id')
  create(@Param('id') id: number, @Body() createMedicneDto: CreateMedicineDto) {
    const medicine = this.medicineService.create(id, createMedicneDto);
    return medicine;
  }

  @Post(':id')
  update(
    @Param('id') id: string,
    @Body() updateMedicineDto: UpdateMedicineDto,
  ) {
    return null;
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    this.medicineService.delete(id);
  }
}
