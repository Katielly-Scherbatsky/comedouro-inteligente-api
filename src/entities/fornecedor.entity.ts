import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'fornecedor' })
export class Fornecedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  endereco: string;

  @Column({ name: 'tempo_entrega' })
  tempoEntrega: string;
}
