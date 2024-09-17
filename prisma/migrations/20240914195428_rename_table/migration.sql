/*
  Warnings:

  - You are about to drop the `hair_cut_service` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `hair_cut` DROP FOREIGN KEY `hair_cut_service_id_fkey`;

-- DropForeignKey
ALTER TABLE `hair_cut_reservation` DROP FOREIGN KEY `hair_cut_reservation_service_id_fkey`;

-- DropForeignKey
ALTER TABLE `hair_cut_service` DROP FOREIGN KEY `hair_cut_service_id_barberShop_fkey`;

-- DropTable
DROP TABLE `hair_cut_service`;

-- CreateTable
CREATE TABLE `barber_service` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `duration` INTEGER NOT NULL,
    `img_url` VARCHAR(191) NOT NULL,
    `id_barberShop` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `hair_cut_reservation` ADD CONSTRAINT `hair_cut_reservation_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `barber_service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `barber_service` ADD CONSTRAINT `barber_service_id_barberShop_fkey` FOREIGN KEY (`id_barberShop`) REFERENCES `barber_shop`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hair_cut` ADD CONSTRAINT `hair_cut_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `barber_service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
