import { Request, Response } from "express";
import { getCategories } from "../services/categoryService";

export async function sendCategories(req: Request, res: Response) {
  try {
    const categories = await getCategories();
    res.send(categories);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
