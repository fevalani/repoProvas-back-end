import { Request, Response } from "express";
import { examSchema } from "../schemas/examSchema";

import * as examService from "../services/examService";

export async function postExam(req: Request, res: Response) {
  try {
    const { categoryId, courseId, professorId } = req.body;

    if (examSchema.validate(req.body).error) {
      return res.sendStatus(400);
    }

    if (await examService.testIfExamExists(req.body)) {
      return res.sendStatus(409);
    }

    if (
      await examService.testIfExistsParams(categoryId, professorId, courseId)
    ) {
      return res.sendStatus(401);
    }

    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function getExam(req: Request, res: Response) {
  try {
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
