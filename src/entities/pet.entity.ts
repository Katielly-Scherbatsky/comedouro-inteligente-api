import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Usuario } from "./usuario.entity";

@Entity({ name: "pet" })
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  raca: string;

  @Column()
  idade: number;

  @Column()
  tipo: number;

  @Column({ name: "usuario_id" })
  usuarioId: number;

  @Column({ type: "decimal" })
  peso: number;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: "id" })
  usuario: Usuario;
}
