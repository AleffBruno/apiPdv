import {MigrationInterface, QueryRunner} from "typeorm";

export class createTablePhotoProductCategory1590863471964 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE photo_product_category (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                photoId integer,
                categoryId integer
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
