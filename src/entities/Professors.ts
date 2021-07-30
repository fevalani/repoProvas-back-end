import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Exams from "./Exams";

@Entity("professors")
export default class Professors {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Exams, (exam) => exam.professor)
  exams: Exams[];
}
