export class UpdateMedicineDto {
  name: string;
  count: number;
  usagePerDay: number;
  from: Date;
  to: Date;
  importance: string;
  isPresciptionOnly: boolean;
}
