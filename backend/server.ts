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
    const todos = await prisma.task.findMany({
        orderBy:{
            id: "asc"
        }
    });

    res.json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

app.put("/:id", async (req, res)=>{
    const id = Number(req.params.id)
    const { completed } = req.body

    const newCompleted = !completed
    try {

        await prisma.task.update({
            where: { id },
            data: {
                completed: newCompleted
            }
        })
        
        
        res.status(200).send()
    } catch (error) {
        console.log(error);
        
    }
})
app.listen(3000, () => {
    console.log(`Servidor em execução na porta: ${port}`);
});
