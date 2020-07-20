import {MigrationInterface, QueryRunner} from "typeorm";

export class createTablePhotoProduct1590862797453 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE photo_product (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                photoId integer,
                productId integer
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
