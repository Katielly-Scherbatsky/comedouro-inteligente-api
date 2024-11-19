import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pet } from './pet.entity';

@Entity({ name: 'alarme' })
export class Alarme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'tipo_alarme', length: 50, nullable: true })
  tipoAlarme: string;

  @Column({ type: 'datetime' })
  horario: Date;

  @Column({ length: 20, nullable: true })
  status: string;

  @ManyToOne(() => Pet)
  @JoinColumn({ name: 'pet_id' })
  pet: Pet;
}
