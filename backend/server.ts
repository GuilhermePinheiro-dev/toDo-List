import express from "express";
import { prisma } from "./lib/prisma.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());


app.post("/", async (req, res) => {
    try {
        const { text } = req.body;
        
        if (!text) {
            return res.status(400).json({
                error: "Não se pode criar uma Todo vazia",
            });
        }
        
        const createTodos = await prisma.task.create({
            data: { text },
        });
        
        res.status(201).json(createTodos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

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
