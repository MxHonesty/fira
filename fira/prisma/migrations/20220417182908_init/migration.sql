/*
  Warnings:

  - Added the required column `name` to the `Manager` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Programmer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Verifier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Manager" ADD COLUMN     "name" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "Programmer" ADD COLUMN     "name" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "Verifier" ADD COLUMN     "name" VARCHAR(255) NOT NULL;
