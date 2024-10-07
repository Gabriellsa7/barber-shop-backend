/*
  Warnings:

  - You are about to alter the column `status` on the `hair_cut_reservation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `hair_cut_reservation` MODIFY `status` ENUM('PENDING', 'CONFIRMED', 'CANCELLED') NOT NULL;
