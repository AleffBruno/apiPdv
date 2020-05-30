import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableUsers1590351838392 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE users (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                name varchar(255),
                email varchar(50),
                password varchar(50),
                isAdmin BIT,
                commission varchar(50),
                phone varchar(50),
                companyId integer
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
