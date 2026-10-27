import express, { json } from "express";
import { usersRouter } from "./routes/users.js";

const app = express();
app.disable("x-powered-by");

app.use(json());

app.use("/users", usersRouter);

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => console.log(`Servidor escuchando en: http://localhost:${PORT}`));