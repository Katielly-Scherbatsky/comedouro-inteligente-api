import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'pedido' })
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'data_pedido', type: 'datetime' })
  dataPedido: Date;

  @Column({ name: 'status_pedido', length: 20, nullable: true })
  statusPedido: string;

  @Column({ name: 'nivel_estoque', type: 'decimal', precision: 5, scale: 2, nullable: true })
  nivelEstoque: number;

  @Column({ name: 'preco_selecionado', type: 'decimal', precision: 8, scale: 2, nullable: true })
  precoSelecionado: number;

  @Column({ name: 'horario_entrega', type: 'datetime', nullable: true })
  horarioEntrega: Date;

  @Column({ name: 'fornecedor', length: 50, nullable: true })
  fornecedor: string;
}
