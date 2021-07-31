import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Course from "./Course";
import Exams from "./Exams";

@Entity("professors")
export default class Professors {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Exams, (exam) => exam.professor)
  exams: Exams[];

  @ManyToMany(() => Course)
  @JoinTable()
  course: Course[];
}
