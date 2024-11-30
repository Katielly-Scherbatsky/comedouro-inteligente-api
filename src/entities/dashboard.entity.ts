import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pet } from './pet.entity';

@Entity({ name: 'dashboard' })
export class Dashboard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'racao_restante' })
  racaoRestante: number;

  @Column()
  alertas: string;

  @Column({ name: 'status_comedouro' })
  statusComedouro: string;

  @ManyToOne(() => Pet)
  @JoinColumn({ name: 'pet_id' })
  pet: Pet;
}
