import { getRepository } from "typeorm";
import Professors from "../../src/entities/Professors";
import faker from "faker";

export async function insertProfessor() {
  const professor = createProfessor();

  await getRepository(Professors).insert(professor);

  return professor;
}

export function createProfessor() {
  const professor = { name: faker.name.firstName };
  return professor;
}
