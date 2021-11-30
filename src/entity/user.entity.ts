import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Medicine } from './medicine.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Medicine, (medicine) => medicine.user)
  medicine: Medicine[];
}
