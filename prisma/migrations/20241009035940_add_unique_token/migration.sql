/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `client_authentication` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `client_authentication_token_key` ON `client_authentication`(`token`);
