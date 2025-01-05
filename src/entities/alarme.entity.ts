import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Comedouro } from './comedouro.entity';

@Entity({ name: 'alarme' })
export class Alarme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ name: 'tipo_alarme' })
  tipoAlarme: string;

  @Column({ type: 'timestamp' })
  data: string;

  @Column()
  status: string;

  @Column({ name: 'comedouro_id' })
  comedouroId: string;

  @ManyToOne(() => Comedouro)
  @JoinColumn({ name: 'id' })
  comedouro: Comedouro;
}
