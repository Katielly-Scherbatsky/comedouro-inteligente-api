import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Fornecedor } from './fornecedor.entity';
import { Produto } from './produto.entity';

@Entity({ name: 'produto_fornecedor' })
export class ProdutoFornecedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'produto_id' })
  produtoId: number;

  @Column({ name: 'fornecedor_id' })
  fornecedorId: number;

  @OneToOne(() => Fornecedor)
  @JoinColumn({ name: 'id' })
  fornecedor: Fornecedor;

  @OneToOne(() => Produto)
  @JoinColumn({ name: 'id' })
  produto: Produto;
}
