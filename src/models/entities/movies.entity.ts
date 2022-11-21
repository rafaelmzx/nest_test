import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movies')
export default class MoviesEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'nome', type: 'varchar' })
  name: string;

  @Column({ name: 'bannerURL', type: 'varchar' })
  bannerURL: string;

  @Column({
    name: 'criado_em',
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({
    name: 'atualizado_em',
    type: 'timestamp',
  })
  updatedAt: Date;
}
