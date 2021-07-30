import { getRepository } from "typeorm";
import faker from "faker";
import Exams from "../../src/entities/Exams";
import { insertCategory } from "./categoryFactory";
import { insertCourse } from "./courseFactory";
import { insertProfessor } from "./professorFactory";

export async function createExam() {
  const categoryId = (await insertCategory()).identifiers[0].id;
  const courseId = (await insertCourse()).identifiers[0].id;
  const professorId = (await insertProfessor()).identifiers[0].id;

  const exam = {
    name: "2020.1",
    categoryId: categoryId,
    courseId: courseId,
    professorId: professorId,
    examUrl: faker.internet.url(),
  };
  return exam;
}

export async function insertExam() {
  const exam = await createExam();

  await getRepository(Exams).insert(exam);

  return exam;
}
