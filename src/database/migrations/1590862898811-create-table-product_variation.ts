import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableProductVariation1590862898811 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE product_variation (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                variationName varchar(255),
                priceVariation float,
                costVariation float,
                amountVariation float,
                productId integer
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
