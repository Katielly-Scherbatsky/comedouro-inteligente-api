import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Comedouro } from './comedouro.entity';
import { Produto } from './produto.entity';

@Entity({ name: 'alimentacao' })
export class Alimentacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  data: string;

  @Column()
  status: string;

  @Column({ name: 'tempo_tampa_aberta' })
  tempoTampaAberta: number;

  @Column({ name: 'produto_id' })
  produtoId: number;

  @Column({ name: 'comedouro_id' })
  comedouroId: number;

  @OneToOne(() => Comedouro)
  @JoinColumn({ name: 'id' })
  comedouro: Comedouro;

  @OneToOne(() => Produto)
  @JoinColumn({ name: 'id' })
  produto: Produto;
}
