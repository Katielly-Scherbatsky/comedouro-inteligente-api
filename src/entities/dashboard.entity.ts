import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pet } from './pet.entity';

@Entity({ name: 'dashboard' })
export class Dashboard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'racao_restante', type: 'decimal', precision: 5, scale: 2, nullable: true })
  racaoRestante: number;

  @Column({ name: 'alertas', type: 'text', nullable: true })
  alertas: string;

  @Column({ name: 'status_comedouro', length: 20, nullable: true })
  statusComedouro: string;

  @ManyToOne(() => Pet)
  @JoinColumn({ name: 'pet_id' })
  pet: Pet;
}
