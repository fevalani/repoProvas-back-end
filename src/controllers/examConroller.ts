import { Request, Response } from "express";

import * as examService from "../services/examService";

export async function postExam(req: Request, res: Response) {
  try {
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
