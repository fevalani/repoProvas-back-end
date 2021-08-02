import { Request, Response } from "express";
import { getProfessorByCourseId } from "../services/professorService";

export async function sendProfsByCourseId(req: Request, res: Response) {
  try {
    const professorList = await getProfessorByCourseId(parseInt(req.params.id));
    res.send(professorList);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
