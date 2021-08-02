import { getRepository } from "typeorm";
import Professors from "../../src/entities/Professors";
import faker from "faker";
import { insertCourse } from "./courseFactory";

export async function insertProfessor() {
  const courseId = (await insertCourse()).identifiers[0].id;
  const professor = await getRepository(Professors).insert(createProfessor());

  return professor;
}

export function createProfessor() {
  const name = faker.name.firstName();
  const professor = { name: `${name}` };
  return professor;
}
