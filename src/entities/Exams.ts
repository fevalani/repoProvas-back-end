import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Professors from "./Professors";
import Course from "./Course";
import Category from "./Category";

@Entity("exams")
export default class Exams {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  examUrl: string;

  @ManyToOne(() => Professors, (professor) => professor.exams)
  professor: Professors;

  @ManyToOne(() => Category, (category) => category.exams)
  category: Category;

  @ManyToOne(() => Course, (course) => course.exams)
  course: Course;
}
