import { getRepository } from "typeorm";
import Course from "../../src/entities/Course";
import faker from "faker";

export async function insertCourse() {
  const course = createCourse();

  await getRepository(Course).insert(course);

  return course;
}

export function createCourse() {
  const course = { name: faker.name.firstName };
  return course;
}
