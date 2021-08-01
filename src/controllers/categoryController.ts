import { Request, Response } from "express";

export async function sendCategories(req: Request, res: Response) {
  try {
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
