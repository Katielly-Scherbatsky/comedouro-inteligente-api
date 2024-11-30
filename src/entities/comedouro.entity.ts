import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pet } from './pet.entity';

@Entity({ name: 'comedouro' })
export class Comedouro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  data: Date;

  @Column({ name: 'status_tampa' })
  statusTampa: string;

  @ManyToOne(() => Pet)
  @JoinColumn({ name: 'pet_id' })
  pet: Pet;
}
