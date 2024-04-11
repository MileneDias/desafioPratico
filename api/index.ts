import express, { Application } from "express";
import connectDatabase from "./src/database/db";
import taskRoute from "./src/routes/task.route";

const app: Application = express();
const port: number = 3000;

connectDatabase();
app.use(express.json());
app.use("/task", taskRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
