import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Fornecedor } from "./fornecedor.entity";
import { Produto } from "./produto.entity";
import { Usuario } from "./usuario.entity";

@Entity({ name: "pedido" })
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamp" })
  data: string;

  @Column()
  status: string;

  @Column({ name: "produto_id" })
  produtoId: number;

  @Column({ type: "decimal" })
  preco: number;

  @Column({ name: "fornecedor_id" })
  fornecedorId: number;

  @Column({ name: "usuario_id" })
  usuarioId: number;

  @OneToOne(() => Fornecedor)
  @JoinColumn({ name: "id" })
  fornecedor: Fornecedor;

  @OneToOne(() => Produto)
  @JoinColumn({ name: "id" })
  produto: Produto;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: "id" })
  usuario: Usuario;
}
