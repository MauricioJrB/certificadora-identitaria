import express from "express";
import { readFile } from 'fs/promises';
import db from "./config/dbConnect.js";
import cors from "cors";
import superUserRouter from "./routes/SuperUserRouter.js";
import pontoColetaRouter from "./routes/PontoColetaRouter.js"
import doacaoRouter from "./routes/DoacaoRouter.js"
import installRouter from "./routes/Install.js";
import postRouter from "./routes/PostRouter.js";
import swaggerUI from "swagger-ui-express";

const app = express();

const swaggerDoc = JSON.parse(
  await readFile(new URL('./swagger_doc.json', import.meta.url))
);

db.on("error", console.log.bind(console, "Connection error"));
db.once("open", () => {
  console.log("DB connection successful");
});

app.get("/", (req, res) => {
    return res.status(200).json({ msg: "Hello World!" });
});

app.use(cors());
app.use(express.json());
app.use(superUserRouter);
app.use(pontoColetaRouter);
app.use(doacaoRouter);
app.use(installRouter);
app.use(postRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

export default app;