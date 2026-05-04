-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "text" VARCHAR(255),
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);
