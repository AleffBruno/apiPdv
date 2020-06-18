import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableUsers1590351838392 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE users (
            id INT(11) NOT NULL AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            isAdmin TINYINT(4) NOT NULL,
            commission VARCHAR(255) NULL DEFAULT NULL,
            phone VARCHAR(255) NOT NULL,
            companyId INT(11) NULL DEFAULT NULL,
            PRIMARY KEY (id),
            INDEX FK_6f9395c9037632a31107c8a9e58 (companyId),
            CONSTRAINT FK_6f9395c9037632a31107c8a9e58 FOREIGN KEY (companyId) REFERENCES companies (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        )
        COLLATE='utf8mb4_general_ci'
        ENGINE=InnoDB
        ;
        
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
