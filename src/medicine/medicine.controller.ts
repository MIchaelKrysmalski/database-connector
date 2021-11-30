import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UpdateMedicineDto } from 'src/dto/update-medicine.dto';
import { Medicine } from 'src/entity/medicine.entity';
import { UpdateEvent } from 'typeorm';

@Controller('medicine')
export class MedicineController {
  @Get()
  getAll(): Medicine[] {
    return null;
  }
  @Get(':id')
  getById(@Param() param): Medicine {
    return null;
  }
  @Post(':id')
  update(
    @Param('id') id: string,
    @Body() updateMedicineDto: UpdateMedicineDto,
  ) {
    return null;
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return null;
  }
}
