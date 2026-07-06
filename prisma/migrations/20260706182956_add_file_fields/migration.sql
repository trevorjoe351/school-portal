/*
  Warnings:

  - Added the required column `fileName` to the `Resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filePath` to the `Resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileType` to the `Resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Resource` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Resource" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "subject" TEXT NOT NULL,
    "form" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Resource" ("createdAt", "form", "id", "subject", "title") SELECT "createdAt", "form", "id", "subject", "title" FROM "Resource";
DROP TABLE "Resource";
ALTER TABLE "new_Resource" RENAME TO "Resource";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
