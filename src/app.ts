import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as examController from "./controllers/examConroller";
import * as courseController from "./controllers/courseController";
import * as categoryController from "./controllers/categoryController";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send/exam", examController.postExam);

app.get("/get/course", courseController.sendCourses);

app.get("/get/all/categories", categoryController.sendCategories);

export async function init() {
  await connectDatabase();
}

export default app;
