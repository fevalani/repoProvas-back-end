import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as examController from "./controllers/examConroller";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send/exam", examController.postExam);

app.get("/send/exam", examController.getExam);

export async function init() {
  await connectDatabase();
}

export default app;
