import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Comedouro } from "./comedouro.entity";
import { Usuario } from "./usuario.entity";

@Entity({ name: "alarme" })
export class Alarme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ name: "tipo_alarme" })
  tipoAlarme: string;

  @Column({ type: "timestamp" })
  data: string;

  @Column()
  status: number;

  @Column({ name: "comedouro_id" })
  comedouroId: number;

  @Column({ name: "usuario_id" })
  usuarioId: number;

  @ManyToOne(() => Comedouro)
  @JoinColumn({ name: "comedouro_id", referencedColumnName: "id" })
  comedouro: Comedouro;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: "usuario_id", referencedColumnName: "id" })
  usuario: Usuario;
}
