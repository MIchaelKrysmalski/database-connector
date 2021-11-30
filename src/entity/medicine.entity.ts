import internal from 'stream';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Medicine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  count: number;

  @Column()
  usagePerDay: number;

  @Column()
  from: Date;

  @Column()
  to: Date;

  @Column()
  importance: string;

  @Column()
  isPresciptionOnly: boolean;

  @ManyToOne(() => User, (user) => user.medicine)
  user: User;
}
