import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableSale1591279332160 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE sale (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                sellerId integer,
                customerId integer,
                paymentTypeId integer,
                additionSale float,
                totalSale float,
                totalCost float,
                totalTroco float,
                totalDiscount float,
                companyId integer,
                status varchar(30)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
