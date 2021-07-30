import { getRepository } from "typeorm";
import Semester from "../../src/entities/Semester";

export async function insertSemester() {
  const semester = await getRepository(Semester).insert(createSemester());

  return semester;
}

export function createSemester() {
  const semester = { name: "1°" };
  return semester;
}
