import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableCustomer1591280385846 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE customer (
                id integer UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                clientType char,
                name_companyName varchar(255),
                nick_fantasyName varchar(255),
                cpf_cnpj varchar(30),
                email varchar(150),
                stateRegistration varchar(100),
                municipalRegistration varchar(100),
                fone varchar(30),
                birthday date,
                rg varchar(30),
                maximumCustomerCredit float,
                comments varchar(255),
                exemptIcms bit,
                optingSimpleNational bit,
                addressId integer,
                companyId integer
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
