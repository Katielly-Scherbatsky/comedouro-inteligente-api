import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'alarme' })
export class Alarme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'pet_id' })
  petId: number;

  @Column()
  raca: string;

  @Column()
  idade: number;

  @Column({ type: 'decimal' })
  peso: number;
}
