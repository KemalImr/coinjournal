/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
-- Inside the generated migration file
ALTER TABLE "User" ADD COLUMN "firstName" TEXT NOT NULL DEFAULT 'John';
ALTER TABLE "User" ADD COLUMN "lastName" TEXT NOT NULL DEFAULT 'Doe';
ALTER TABLE "User" ADD COLUMN "password" TEXT NOT NULL DEFAULT 'password123';
