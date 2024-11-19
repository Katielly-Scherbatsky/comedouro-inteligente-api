import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pet } from './pet.entity';

@Entity({ name: 'alarme' })
export class Alarme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'tipo_alarme' })
  tipoAlarme: string;

  @Column({ name: 'horario', type: 'timestamp' })
  horario: Date;

  @Column()
  status: string;

  @ManyToOne(() => Pet)
  @JoinColumn({ name: 'pet_id' })
  pet: Pet;
}
