import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'reservas' })
export class ReservaEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'mesa', nullable: false })
  mesa: string;

  @Column({ name: 'cliente_name', nullable: false })
  cliente_name: string;

  @Column({ name: 'horario_entrada', nullable: false })
  horario_entrada: string;

  @Column({ name: 'tempo', nullable: false })
  tempo: string;

  @CreateDateColumn({ name: 'create_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'update_at' })
  updatedAt: string;
}
