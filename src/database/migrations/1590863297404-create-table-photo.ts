import {MigrationInterface, QueryRunner} from "typeorm";

export class createTablePhoto1590863297404 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE photo (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                image varchar(255),
                originalName varchar(255)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
