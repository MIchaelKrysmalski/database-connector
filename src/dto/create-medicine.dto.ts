import { User } from 'src/entity/user.entity';

export class CreateMedicineDto {
  name: string;
  count: number;
  usagePerDay: number;
  from: Date;
  to: Date;
  importance: string;
  isPresciptionOnly: boolean;
}
