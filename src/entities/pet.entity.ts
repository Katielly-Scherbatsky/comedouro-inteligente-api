import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'pet' })
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  raca: string;

  @Column()
  idade: number;

  @Column({ type: 'decimal' })
  peso: number;
}
