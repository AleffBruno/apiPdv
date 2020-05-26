import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableUsers1590351838392 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE users (
                name varchar(255)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
