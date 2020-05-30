import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableProducts1590861567731 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE products (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                name varchar(255),
                photoProductId integer,
                code varchar(50),
                categoryProductId integer,
                salePrice float,
                costPrice float,
                canEditValue bit,
                barCode varchar(255),
                unit varchar(30),
                minStock float,
                controlStock bit,
                modifiersId integer,
                observations varchar(255),
                showProductOnline bit,
                netWeight varchar(50),
                grossWeight varchar(50),
                catalogDescription varchar(255),
                hasVariation bit,
                productVariationId integer,
                productGeneratesCommision bit,
                companyId integer
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
