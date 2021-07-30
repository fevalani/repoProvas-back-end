import { getRepository } from "typeorm";
import Course from "../../src/entities/Course";
import faker from "faker";
import { insertSemester } from "./semesterFactory";

export async function insertCourse() {
  const course = await getRepository(Course).insert(await createCourse());

  return course;
}

export async function createCourse() {
  const semesterId = (await insertSemester()).identifiers[0].id;
  const name = faker.name.firstName();
  const course = { name: `${name}`, semesterId: semesterId };
  return course;
}
