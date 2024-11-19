import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'pet' })
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nome: string;

  @Column({ length: 50, nullable: true })
  raca: string;

  @Column({ nullable: true })
  idade: number;

  @Column({ type: 'decimal' })
  peso: number;
}
