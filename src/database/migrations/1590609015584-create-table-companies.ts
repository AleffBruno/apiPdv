import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableCompanies1590609015584 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE companies (
                id integer UNSIGNED NOT NULL,
                name varchar(255),
                email varchar(50),
                cpfCnpj varchar(50),
                phone varchar(50),
                addressId integer,
                masterPassword varchar(50)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
