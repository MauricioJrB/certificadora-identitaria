import express from "express";
import db from "./config/dbConnect.js";
import cors from "cors";
import superUserRouter from "./routes/SuperUserRouter.js";
import pontoColetaRouter from "./routes/PontoColetaRouter.js"
import doacaoRouter from "./routes/DoacaoRouter.js"
import installRouter from "./routes/Install.js";

const app = express();

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


export default app;