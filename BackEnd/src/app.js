import express from "express";
import db from "./config/dbConnect.js";
import cors from "cors";

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


export default app;