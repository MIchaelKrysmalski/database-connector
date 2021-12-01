import { InjectRepository } from '@nestjs/typeorm';
import { CreateMedicineDto } from 'src/dto/create-medicine.dto';
import { UpdateMedicineDto } from 'src/dto/update-medicine.dto';
import { Medicine } from 'src/entity/medicine.entity';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

export class MedicineService {
  constructor(
    @InjectRepository(Medicine)
    private medicineRepository: Repository<Medicine>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(id: number, createMedicneDto: CreateMedicineDto) {
    const medicine = new Medicine();
    medicine.count = createMedicneDto.count;
    medicine.from = createMedicneDto.from;
    medicine.to = createMedicneDto.to;
    medicine.importance = createMedicneDto.importance;
    medicine.isPresciptionOnly = createMedicneDto.isPresciptionOnly;
    medicine.name = createMedicneDto.name;
    medicine.usagePerDay = createMedicneDto.usagePerDay;
    const user = await this.userRepository.findOne(id);
    medicine.user = user;
    this.medicineRepository.save(medicine);
    return medicine;
  }
  async update(id: number, updateMedicineDto: UpdateMedicineDto) {
    const medicine = await this.getById(id);
    medicine.name = updateMedicineDto.name;
    medicine.count = updateMedicineDto.count;
    medicine.from = updateMedicineDto.from;
    medicine.to = updateMedicineDto.to;
    medicine.importance = updateMedicineDto.importance;
    medicine.usagePerDay = updateMedicineDto.usagePerDay;
    medicine.isPresciptionOnly = updateMedicineDto.isPresciptionOnly;

    this.userRepository.save(medicine);
    return medicine;
  }
  async getById(id: number): Promise<Medicine> {
    const medicine = await this.medicineRepository.findOne(id);
    console.log(process.env.DB_PASSWORD);
    return medicine;
  }
  async delete(id: number): Promise<void> {
    await this.medicineRepository.delete(id);
  }
}
