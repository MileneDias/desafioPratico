const express = require("express");
const app = express();

const connectDatabase = require("./src/database/db");
const taskRoute = require("./src/routes/task.route");
const port = 3000;

connectDatabase();
app.use(express.json());
app.use("/task", taskRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
