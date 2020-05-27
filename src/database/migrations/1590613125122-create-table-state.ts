import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableState1590613125122 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE state (
                id integer UNSIGNED NOT NULL,
                name varchar(255)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
