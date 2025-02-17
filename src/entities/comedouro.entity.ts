import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pet } from "./pet.entity";
import { Produto } from "./produto.entity";

@Entity({ name: "comedouro" })
export class Comedouro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ type: "timestamp" })
  data: string;

  @Column()
  status: number;

  @Column({ name: "situacao_tampa" })
  situacaoTampa: number;

  @Column({ name: "status_racao" })
  statusRacao: number;

  @Column({ name: "pet_id" })
  petId: number;

  @Column({ name: "produto_id" })
  produtoId: number;

  @OneToOne(() => Pet)
  @JoinColumn({ name: "id" })
  pet: Pet;

  @OneToOne(() => Produto)
  @JoinColumn({ name: "id" })
  produto: Produto;
}
