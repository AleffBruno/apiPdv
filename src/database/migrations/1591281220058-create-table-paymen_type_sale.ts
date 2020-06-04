import {MigrationInterface, QueryRunner} from "typeorm";

export class createTablePaymenTypeSale1591281220058 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE paymen_type_sale (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                paymenTypeId integer,
                saleId integer,
                valuePaymentSale float
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
