import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Timestamp } from 'typeorm';
import { Pet } from './pet.entity';

@Entity()
export class Alarme {
  @PrimaryGeneratedColumn({ name: 'id_alarme' })
  idAlarme: number;

  @Column({ name: 'tipo_alarme'})
  tipoAlarme: string;

  @Column({ type:'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  horario: Date;

  @Column()
  status: string;

  @ManyToOne(() => Pet, (pet) => pet.alarme)
  @JoinColumn({ name: 'id_pet' })  // Ensure the column name is id_pet
  id_pet: Pet;  // This should refer to the Pet entity, mapped to the correct column name in the database
}

