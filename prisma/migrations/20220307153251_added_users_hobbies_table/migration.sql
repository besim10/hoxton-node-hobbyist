/*
  Warnings:

  - You are about to drop the column `userId` on the `Hobby` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "UsersHobbies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "hobbyId" INTEGER NOT NULL,
    CONSTRAINT "UsersHobbies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UsersHobbies_hobbyId_fkey" FOREIGN KEY ("hobbyId") REFERENCES "Hobby" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Hobby" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT,
    "active" BOOLEAN NOT NULL
);
INSERT INTO "new_Hobby" ("active", "id", "imageUrl", "name") SELECT "active", "id", "imageUrl", "name" FROM "Hobby";
DROP TABLE "Hobby";
ALTER TABLE "new_Hobby" RENAME TO "Hobby";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
