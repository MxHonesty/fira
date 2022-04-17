-- CreateTable
CREATE TABLE "Verifier" (
    "id" SERIAL NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "creatorId" INTEGER NOT NULL,

    CONSTRAINT "Verifier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Programmer" (
    "id" SERIAL NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "creatorId" INTEGER NOT NULL,

    CONSTRAINT "Programmer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manager" (
    "id" SERIAL NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "Manager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bug" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reporterId" INTEGER NOT NULL,
    "fixerId" INTEGER,

    CONSTRAINT "Bug_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Verifier" ADD CONSTRAINT "Verifier_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Programmer" ADD CONSTRAINT "Programmer_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bug" ADD CONSTRAINT "Bug_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "Verifier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bug" ADD CONSTRAINT "Bug_fixerId_fkey" FOREIGN KEY ("fixerId") REFERENCES "Programmer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
