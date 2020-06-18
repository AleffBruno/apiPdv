import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableUsers1590351838392 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE users (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                name varchar(255),
                email varchar(255),
                password varchar(255),
                isAdmin BIT,
                commission varchar(50),
                phone varchar(255),
                companyId integer
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
