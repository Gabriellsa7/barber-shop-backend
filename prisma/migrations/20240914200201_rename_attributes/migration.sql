/*
  Warnings:

  - You are about to drop the column `id_barberShop` on the `barber_service` table. All the data in the column will be lost.
  - Added the required column `barberShop_id` to the `barber_service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `barber_service` DROP FOREIGN KEY `barber_service_id_barberShop_fkey`;

-- AlterTable
ALTER TABLE `barber_service` DROP COLUMN `id_barberShop`,
    ADD COLUMN `barberShop_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `barber_service` ADD CONSTRAINT `barber_service_barberShop_id_fkey` FOREIGN KEY (`barberShop_id`) REFERENCES `barber_shop`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
