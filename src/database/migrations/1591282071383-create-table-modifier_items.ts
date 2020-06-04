import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableModifierItems1591282071383 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE modifier_items (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                name varchar(255),
                salePrice float,
                costPrice float,
                modifierId integer
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
