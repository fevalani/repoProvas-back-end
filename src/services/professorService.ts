import { getRepository } from "typeorm";
import Professors from "../entities/Professors";

export async function getProfessorByCourseId(id: Number) {
  const professorList = await getRepository(Professors).find({
    join: {
      alias: "course",
      leftJoinAndSelect: {
        id: "courseId",
        name: "courseName",
      },
    },
  });
  console.log(professorList);

  return professorList;
}
