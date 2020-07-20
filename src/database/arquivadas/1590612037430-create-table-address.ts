import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableAddress1590612037430 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE addresses (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                stateId integer,
                cityId integer,
                neighborhood varchar(255),
                cep varchar(30),
                street varchar(255),
                number varchar(30),
                complement varchar(100)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
