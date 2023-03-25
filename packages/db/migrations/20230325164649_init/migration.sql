/*
  Warnings:

  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "SubscriptionPlan" AS ENUM ('FREE');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role",
ADD COLUMN     "subscriptionPlan" "SubscriptionPlan" NOT NULL DEFAULT 'FREE';
