import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Exams from "./Exams";

@Entity("course")
export default class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Exams, (exam) => exam.course)
  exams: Exams[];
}
