# ToDo List Fullstack

Uma aplicação fullstack de lista de tarefas com:
- Frontend em **React + TypeScript + TailwindCSS**
- Backend em **Node.js + Express + Prisma**
- Banco de dados **PostgreSQL**

---

## Sobre o projeto

Esta aplicação permite criar, marcar como concluída, excluir e filtrar tarefas. O frontend consome uma API REST simples que persiste os dados no PostgreSQL usando Prisma.

O objetivo é demonstrar um fluxo completo entre interface e servidor, com:
- cadastro de tarefas
- listagem e ordenação
- alternância de estado (concluído / ativo)
- remoção de tarefas individuais
- limpeza de tarefas concluídas

---

## Tecnologias

- **React**
- **TypeScript**
- **TailwindCSS**
- **Vite**
- **Node.js**
- **Express**
- **Prisma**
- **PostgreSQL**
- **Axios**
- **CORS**

---

## Como rodar

### 1. Frontend

```bash
cd toDo-List
npm install
npm run dev
```

### 2. Backend

```bash
cd backend
npm install
npm run dev
```

### 3. Banco de dados

- Crie ou configure a base de dados PostgreSQL.
- Adicione `DATABASE_URL` em `backend/.env`.
- Se necessário, execute migrações com Prisma.

---

## Estrutura do projeto

```text
├── backend/
│   ├── lib/prisma.ts          # Cliente Prisma
│   ├── prisma/schema.prisma   # Modelo do banco de dados
│   └── server.ts              # API Express
├── src/
│   ├── App.tsx                # Componente raiz
│   ├── main.tsx               # Entrada da aplicação
│   ├── components/            # Componentes React
│   │   ├── TodoForm/
│   │   ├── TodoHeader/
│   │   ├── TodoList/
│   │   ├── TodoContainer/
│   │   └── hooks/useTodo.ts   # Lógica de estado e chamadas à API
│   └── styles/globals.css
├── package.json               # Scripts e dependências do frontend
└── backend/package.json       # Scripts e dependências do backend
```

---

## API (resumo)

- `GET /` — retorna todas as tarefas ordenadas.
- `POST /` — cria uma nova tarefa.
  - body: `{ text: string }`
- `PUT /:id` — alterna o estado de conclusão de uma tarefa.
  - body: `{ completed: boolean }`
- `DELETE /:id` — exclui uma tarefa específica.
- `DELETE /` — remove todas as tarefas concluídas.

---

## Autor

- **Guilherme Pinheiro**
