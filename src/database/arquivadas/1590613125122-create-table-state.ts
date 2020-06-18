import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableState1590613125122 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE states (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                name varchar(255)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
