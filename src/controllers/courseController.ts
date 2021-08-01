import { Request, Response } from "express";
import { getCourses } from "../services/courseService";

export async function sendCourses(req: Request, res: Response) {
  try {
    const courses = await getCourses();
    res.send(courses);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
