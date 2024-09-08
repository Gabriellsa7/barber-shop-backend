/*
  Warnings:

  - You are about to drop the column `client_id` on the `client_authentication` table. All the data in the column will be lost.
  - You are about to drop the column `client_id` on the `hair_cut_reservation` table. All the data in the column will be lost.
  - You are about to drop the column `client_id` on the `payment` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `client_authentication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `hair_cut_reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `payment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `client_authentication` DROP FOREIGN KEY `client_authentication_client_id_fkey`;

-- DropForeignKey
ALTER TABLE `hair_cut_reservation` DROP FOREIGN KEY `hair_cut_reservation_client_id_fkey`;

-- DropForeignKey
ALTER TABLE `payment` DROP FOREIGN KEY `payment_client_id_fkey`;

-- AlterTable
ALTER TABLE `client_authentication` DROP COLUMN `client_id`,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `hair_cut_reservation` DROP COLUMN `client_id`,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `payment` DROP COLUMN `client_id`,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `client_authentication` ADD CONSTRAINT `client_authentication_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hair_cut_reservation` ADD CONSTRAINT `hair_cut_reservation_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
