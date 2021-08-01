import { getRepository } from "typeorm";
import Course from "../entities/Course";

export async function getCourses() {
  const courses = await getRepository(Course).find();

  return courses;
}
