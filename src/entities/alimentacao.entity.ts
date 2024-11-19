import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pet } from './pet.entity';

@Entity({ name: 'alimentacao' })
export class Alimentacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  data: Date;

  @Column({ name: 'status_alimentacao' })
  statusAlimentacao: string;

  @Column({ name: 'tempo_tampa_aberta' })
  tempoTampaAberta: number;

  @Column({ name: 'pet_id' })
  petId: number;

  @ManyToOne(() => Pet)
  @JoinColumn({ name: 'pet_id' })
  pet: Pet;
}
