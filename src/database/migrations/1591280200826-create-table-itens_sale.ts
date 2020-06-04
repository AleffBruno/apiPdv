import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableItensSale1591280200826 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE itens_sale (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                saleId integer,
                productId integer,
                variationProductId integer,
                costItem float,
                amountItem float,
                discountItem float,
                additionItem float,
                totalItem float
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
