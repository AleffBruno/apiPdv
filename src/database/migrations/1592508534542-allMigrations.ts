import {MigrationInterface, QueryRunner} from "typeorm";

export class allMigrations1592508534542 implements MigrationInterface {
    name = 'allMigrations1592508534542'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `states` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `cities` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `isAdmin` tinyint NOT NULL, `commission` varchar(255) NULL, `phone` varchar(255) NOT NULL, `companyId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `product_photos` (`id` int NOT NULL AUTO_INCREMENT, `image` varchar(255) NOT NULL, `originalName` varchar(255) NOT NULL, `productId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `products` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `code` varchar(255) NOT NULL, `salePrice` decimal(5,2) NOT NULL, `costPrice` decimal(5,2) NOT NULL, `canEditValue` tinyint NOT NULL, `barCode` varchar(255) NOT NULL, `unit` varchar(255) NOT NULL, `minStock` decimal(5,2) NOT NULL, `controlStock` tinyint NOT NULL, `observations` varchar(255) NULL, `showProductOnline` tinyint NOT NULL, `netWeight` varchar(255) NOT NULL, `grossWeight` varchar(255) NOT NULL, `catalogDescription` varchar(255) NOT NULL, `hasVariation` tinyint NOT NULL, `productGeneratesCommision` tinyint NOT NULL, `companyId` int NULL, `pcategoriesId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `pcategories` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `showOnline` tinyint NOT NULL, `companyId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `payments` (`id` int NOT NULL AUTO_INCREMENT, `paymentDate` varchar(255) NOT NULL, `isPaid` tinyint NOT NULL, `wasPaidIn` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `value` varchar(255) NOT NULL, `installmentNumber` int NOT NULL, `billId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `bills` (`id` int NOT NULL AUTO_INCREMENT, `defaultName` varchar(255) NOT NULL, `defaultValue` varchar(255) NOT NULL, `type` varchar(255) NOT NULL, `firstPaymentDate` varchar(255) NOT NULL, `isMonthFixed` tinyint NOT NULL, `receiveNotification` tinyint NOT NULL, `notificationDate` varchar(255) NOT NULL, `extraAnnotations` varchar(255) NOT NULL, `isInstallment` tinyint NOT NULL, `companyId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `companies` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `cpfCnpj` varchar(255) NOT NULL, `phone` varchar(255) NOT NULL, `masterPassword` varchar(255) NOT NULL, `addressId` int NULL, UNIQUE INDEX `REL_2bb6583d4cf35554e19694c8a9` (`addressId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `addresses` (`id` int NOT NULL AUTO_INCREMENT, `neighborhood` varchar(100) NULL, `cep` varchar(30) NULL, `street` varchar(255) NULL, `number` varchar(30) NULL, `complement` varchar(100) NULL, `stateId` int NULL, `cityId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `question` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `text` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `category` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `customers` (`id` int NOT NULL AUTO_INCREMENT, `clientType` varchar(255) NOT NULL, `companyName` varchar(255) NOT NULL, `fantasyName` varchar(255) NOT NULL, `cpfCnpj` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `stateRegistration` varchar(255) NOT NULL, `municipalRegistration` varchar(255) NOT NULL, `phone` varchar(255) NOT NULL, `birthday` varchar(255) NOT NULL, `rg` varchar(255) NOT NULL, `maximumCustomerCredit` varchar(255) NOT NULL, `comments` varchar(255) NOT NULL, `exemptIcms` tinyint NOT NULL, `optingSimpleNational` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `question_categories_category` (`questionId` int NOT NULL, `categoryId` int NOT NULL, INDEX `IDX_21433e6d9a0e7e79c36b4ae69f` (`questionId`), INDEX `IDX_9cf04f10454634f887ade56562` (`categoryId`), PRIMARY KEY (`questionId`, `categoryId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_6f9395c9037632a31107c8a9e58` FOREIGN KEY (`companyId`) REFERENCES `companies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `product_photos` ADD CONSTRAINT `FK_9c18967daa2898d149078cb8282` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `products` ADD CONSTRAINT `FK_47942e65af8e4235d4045515f05` FOREIGN KEY (`companyId`) REFERENCES `companies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `products` ADD CONSTRAINT `FK_0398a318780f24790da7d20d2ca` FOREIGN KEY (`pcategoriesId`) REFERENCES `pcategories`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `pcategories` ADD CONSTRAINT `FK_77cbe4fb793c63c7948d6d9df8e` FOREIGN KEY (`companyId`) REFERENCES `companies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `payments` ADD CONSTRAINT `FK_566f88b54bf6a0f477b14e8daa5` FOREIGN KEY (`billId`) REFERENCES `bills`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `bills` ADD CONSTRAINT `FK_9f41e82e243fb8a6c492e28d244` FOREIGN KEY (`companyId`) REFERENCES `companies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `companies` ADD CONSTRAINT `FK_2bb6583d4cf35554e19694c8a9b` FOREIGN KEY (`addressId`) REFERENCES `addresses`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `addresses` ADD CONSTRAINT `FK_debce902ec6af918010a7b04264` FOREIGN KEY (`stateId`) REFERENCES `states`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `addresses` ADD CONSTRAINT `FK_221420cb636d4e9e48aeca528a0` FOREIGN KEY (`cityId`) REFERENCES `cities`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `question_categories_category` ADD CONSTRAINT `FK_21433e6d9a0e7e79c36b4ae69fd` FOREIGN KEY (`questionId`) REFERENCES `question`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `question_categories_category` ADD CONSTRAINT `FK_9cf04f10454634f887ade565622` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `question_categories_category` DROP FOREIGN KEY `FK_9cf04f10454634f887ade565622`");
        await queryRunner.query("ALTER TABLE `question_categories_category` DROP FOREIGN KEY `FK_21433e6d9a0e7e79c36b4ae69fd`");
        await queryRunner.query("ALTER TABLE `addresses` DROP FOREIGN KEY `FK_221420cb636d4e9e48aeca528a0`");
        await queryRunner.query("ALTER TABLE `addresses` DROP FOREIGN KEY `FK_debce902ec6af918010a7b04264`");
        await queryRunner.query("ALTER TABLE `companies` DROP FOREIGN KEY `FK_2bb6583d4cf35554e19694c8a9b`");
        await queryRunner.query("ALTER TABLE `bills` DROP FOREIGN KEY `FK_9f41e82e243fb8a6c492e28d244`");
        await queryRunner.query("ALTER TABLE `payments` DROP FOREIGN KEY `FK_566f88b54bf6a0f477b14e8daa5`");
        await queryRunner.query("ALTER TABLE `pcategories` DROP FOREIGN KEY `FK_77cbe4fb793c63c7948d6d9df8e`");
        await queryRunner.query("ALTER TABLE `products` DROP FOREIGN KEY `FK_0398a318780f24790da7d20d2ca`");
        await queryRunner.query("ALTER TABLE `products` DROP FOREIGN KEY `FK_47942e65af8e4235d4045515f05`");
        await queryRunner.query("ALTER TABLE `product_photos` DROP FOREIGN KEY `FK_9c18967daa2898d149078cb8282`");
        await queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_6f9395c9037632a31107c8a9e58`");
        await queryRunner.query("DROP INDEX `IDX_9cf04f10454634f887ade56562` ON `question_categories_category`");
        await queryRunner.query("DROP INDEX `IDX_21433e6d9a0e7e79c36b4ae69f` ON `question_categories_category`");
        await queryRunner.query("DROP TABLE `question_categories_category`");
        await queryRunner.query("DROP TABLE `customers`");
        await queryRunner.query("DROP TABLE `category`");
        await queryRunner.query("DROP TABLE `question`");
        await queryRunner.query("DROP TABLE `addresses`");
        await queryRunner.query("DROP INDEX `REL_2bb6583d4cf35554e19694c8a9` ON `companies`");
        await queryRunner.query("DROP TABLE `companies`");
        await queryRunner.query("DROP TABLE `bills`");
        await queryRunner.query("DROP TABLE `payments`");
        await queryRunner.query("DROP TABLE `pcategories`");
        await queryRunner.query("DROP TABLE `products`");
        await queryRunner.query("DROP TABLE `product_photos`");
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP TABLE `cities`");
        await queryRunner.query("DROP TABLE `states`");
    }

}
