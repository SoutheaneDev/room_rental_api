import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableRooms1771139259598 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'rooms',
        columns: [
          {
            name: 'id',
            type: 'char',
            length: '36',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
            // Remove the default property, or use the correct syntax below
          },
          {
            name: 'roomNumber',
            type: 'int',
          },
          {
            name: 'width',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'height',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'dimension',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'description',
            type: 'json',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('rooms');
  }
}