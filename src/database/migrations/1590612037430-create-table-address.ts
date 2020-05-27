import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableAddress1590612037430 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE address (
                id integer UNSIGNED NOT NULL,
                stateId integer,
                cityId integer,
                neighborhood varchar(100),
                cep integer,
                street varchar(100),
                number varchar(30),
                complement varchar(100)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
