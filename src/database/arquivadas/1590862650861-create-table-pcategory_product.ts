import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableProductCategoryProduct1590862650861 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE pcategory_product (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                categoryId integer,
                productId integer
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
