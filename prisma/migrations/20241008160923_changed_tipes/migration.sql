/*
  Warnings:

  - You are about to alter the column `payment_method` on the `payment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - You are about to alter the column `status` on the `payment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(2))`.

*/
-- AlterTable
ALTER TABLE `payment` MODIFY `payment_method` ENUM('CREDIT_CARD', 'DEBIT_CARD', 'PAYPAL', 'CASH') NOT NULL,
    MODIFY `status` ENUM('PENDING', 'CONFIRMED', 'CANCELLED') NOT NULL;
