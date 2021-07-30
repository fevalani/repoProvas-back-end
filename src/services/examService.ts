import { getRepository } from "typeorm";
import Category from "../entities/Category";
import Course from "../entities/Course";
import Exams from "../entities/Exams";
import Professors from "../entities/Professors";

export async function testIfExamExists(body: Exams) {
  const exam = await getRepository(Exams)
    .createQueryBuilder("exam")
    .where("exam.examUrl = :examUrl", {
      examUrl: body.examUrl,
    })
    .getOne();
  if (!exam) {
    return false;
  } else {
    return true;
  }
}

export async function testIfExistsParams(
  categoryId: number,
  professorId: number,
  courseId: number
) {
  const category = await getRepository(Category).findOne(categoryId);
  const professor = await getRepository(Professors).findOne(professorId);
  const course = await getRepository(Course).findOne(courseId);

  if (!category || !professor || !course) {
    return true;
  } else {
    return false;
  }
}
