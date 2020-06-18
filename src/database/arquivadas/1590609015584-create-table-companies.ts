import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableCompanies1590609015584 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE companies (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                name varchar(255),
                email varchar(255),
                cpfCnpj varchar(30),
                phone varchar(30),
                addressId integer,
                masterPassword varchar(255),
                type char(2)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
