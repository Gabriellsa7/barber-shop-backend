/*
  Warnings:

  - You are about to drop the column `image_url` on the `barber_shop` table. All the data in the column will be lost.
  - You are about to drop the column `barbershop_id` on the `hair_cut` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `hair_cut` table. All the data in the column will be lost.
  - You are about to drop the column `barbershop_id` on the `hair_cut_reservation` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `hair_cut_reservation` table. All the data in the column will be lost.
  - You are about to drop the column `id_barbershop` on the `hair_cut_service` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `hair_cut_service` table. All the data in the column will be lost.
  - Added the required column `barberShop_id` to the `hair_cut` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img_url` to the `hair_cut` table without a default value. This is not possible if the table is not empty.
  - Added the required column `barberShop_id` to the `hair_cut_reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img_url` to the `hair_cut_reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_barberShop` to the `hair_cut_service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img_url` to the `hair_cut_service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `hair_cut` DROP FOREIGN KEY `hair_cut_barbershop_id_fkey`;

-- DropForeignKey
ALTER TABLE `hair_cut_reservation` DROP FOREIGN KEY `hair_cut_reservation_barbershop_id_fkey`;

-- DropForeignKey
ALTER TABLE `hair_cut_service` DROP FOREIGN KEY `hair_cut_service_id_barbershop_fkey`;

-- AlterTable
ALTER TABLE `barber_shop` DROP COLUMN `image_url`,
    ADD COLUMN `img_url` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `hair_cut` DROP COLUMN `barbershop_id`,
    DROP COLUMN `image_url`,
    ADD COLUMN `barberShop_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `img_url` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `hair_cut_reservation` DROP COLUMN `barbershop_id`,
    DROP COLUMN `image_url`,
    ADD COLUMN `barberShop_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `img_url` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `hair_cut_service` DROP COLUMN `id_barbershop`,
    DROP COLUMN `image_url`,
    ADD COLUMN `id_barberShop` VARCHAR(191) NOT NULL,
    ADD COLUMN `img_url` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `hair_cut_reservation` ADD CONSTRAINT `hair_cut_reservation_barberShop_id_fkey` FOREIGN KEY (`barberShop_id`) REFERENCES `barber_shop`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hair_cut_service` ADD CONSTRAINT `hair_cut_service_id_barberShop_fkey` FOREIGN KEY (`id_barberShop`) REFERENCES `barber_shop`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hair_cut` ADD CONSTRAINT `hair_cut_barberShop_id_fkey` FOREIGN KEY (`barberShop_id`) REFERENCES `barber_shop`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
