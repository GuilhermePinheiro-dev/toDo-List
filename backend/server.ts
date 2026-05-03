import express from "express";
import { prisma } from "./lib/prisma.js";
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())

app.get("/", async (req, res) => {
  try {
    const todos = await prisma.task.findMany();

    res.json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

app.listen(3000, () => {
  console.log(`Servidor em execução na porta: ${port}`);
});
