import {MigrationInterface, QueryRunner} from "typeorm";

export class createTablePaymentType1591281399986 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE payment_type (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                name varchar(255),
                isActive bit,
                amountInstallments integer
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
