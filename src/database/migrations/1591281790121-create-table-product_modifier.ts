import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableProductModifier1591281790121 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE product_modifier (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                productId integer,
                modifierId integer
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
