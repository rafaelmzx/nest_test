import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class AlterMovie1669069327040 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'movies',
      new TableColumn({
        name: 'criado_em',
        type: 'timestamp',
        isNullable:true
      }),
    );
    await queryRunner.addColumn(
      'movies',
      new TableColumn({
        name: 'atualizado_em',
        type: 'timestamp',
        isNullable:true
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movies');
  }
}
