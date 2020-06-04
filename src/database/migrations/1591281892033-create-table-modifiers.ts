import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableModifiers1591281892033 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE modifiers (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                name varchar(255),
                maxAmount float,
                isRequired bit,
                modifierItemsId integer,
                companyId integer
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
