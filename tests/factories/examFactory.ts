import { getRepository } from "typeorm";
import faker from "faker";
import Exams from "../../src/entities/Exams";

export function createExam() {
  //usar faker
  const exam = {
    name: "2020.1",
    categoryId: 1,
    courseId: 1,
    professorId: 1,
    examUrl: "https://globo.com",
  };
  return exam;
}

export async function insertExam() {
  const exam = createExam();

  await getRepository(Exams).insert(exam);

  return exam;
}
