import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Exams from "./Exams";
import Semester from "./Semester";

@Entity("course")
export default class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Exams, (exam) => exam.course)
  exams: Exams[];

  @ManyToOne(() => Semester, (semester) => semester.course)
  semester: Semester;
}
