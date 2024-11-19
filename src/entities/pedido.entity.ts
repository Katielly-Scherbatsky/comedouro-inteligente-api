import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'pedido' })
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'data_pedido', type: 'timestamp' })
  dataPedido: Date;

  @Column({ name: 'status_pedido' })
  statusPedido: string;

  @Column({ name: 'nivel_estoque', type: 'decimal' })
  nivelEstoque: number;

  @Column({ name: 'preco_selecionado', type: 'decimal' })
  precoSelecionado: number;

  @Column({ name: 'horario_entrega', type: 'timestamp' })
  horarioEntrega: Date;

  @Column({ name: 'fornecedor' })
  fornecedor: string;
}
