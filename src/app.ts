import express from "express";
import cors from "cors";
import * as questionController from "./controllers/questionsController"

const app = express();
app.use(express.json());
app.use(cors());

app.post("/questions",questionController.newQuestion)

export default app;
