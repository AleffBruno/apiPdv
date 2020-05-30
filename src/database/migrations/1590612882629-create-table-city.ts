import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableCity1590612882629 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE city (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                name varchar(255),
                stateId integer
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
