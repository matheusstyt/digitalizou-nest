import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity({ name: 'usuarios' })
export class UsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'nome', nullable: false })
  nome: string;
  @Column({ name: 'email', nullable: false })
  email: string;
  @Column({ name: 'senha', nullable: false })
  senha: string;
  @Column({ name: 'administrador', nullable: false, default: true })
  administrador: boolean;
  @CreateDateColumn({ name: 'create_at' })
  createAt: string;
  @UpdateDateColumn({ name: 'update_at' })
  updateAt: string;
}
