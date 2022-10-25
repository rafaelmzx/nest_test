import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('usuarios')
export default class UserEntity {
  @PrimaryColumn()
  id?: number;

  @Column({ name: 'nome', type: 'varchar' })
  name: string;

  @Column({ name: 'ativo', type: 'boolean' })
  active: boolean;

  @Column({
    name: 'criado_em',
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({
    name: 'atualizado_em',
    type: 'timestamp',
  })
  updateAt: Date;
}
