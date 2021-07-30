import { getRepository } from "typeorm";
import Category from "../../src/entities/Category";
import Course from "../../src/entities/Course";
import Exams from "../../src/entities/Exams";
import Professors from "../../src/entities/Professors";
import Semester from "../../src/entities/Semester";

export async function clearDatabase() {
  await getRepository(Exams).delete({});
  await getRepository(Category).delete({});
  await getRepository(Course).delete({});
  await getRepository(Professors).delete({});
  await getRepository(Semester).delete({});
}
