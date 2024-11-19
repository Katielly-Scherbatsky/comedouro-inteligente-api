import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pet } from './pet.entity';

@Entity({ name: 'alimentacao' })
export class Alimentacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  data: Date;

  @Column({ name: 'status_alimentacao', length: 20, nullable: true })
  statusAlimentacao: string;

  @Column({ name: 'tempo_tampa_aberta', type: 'decimal', precision: 5, scale: 2, nullable: true })
  tempoTampaAberta: number;

  @Column({ name: 'pet_id', length: 20, nullable: true })
  petId: number;

  @ManyToOne(() => Pet)
  @JoinColumn({ name: 'pet_id' })
  pet: Pet;
}
