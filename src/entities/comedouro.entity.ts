import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pet } from './pet.entity';

@Entity({ name: 'comedouro' })
export class Comedouro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  data: Date;

  @Column({ name: 'status_tampa', length: 20, nullable: true })
  statusTampa: string;

  @ManyToOne(() => Pet)
  @JoinColumn({ name: 'pet_id' })
  pet: Pet;
}
