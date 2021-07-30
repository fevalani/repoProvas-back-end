import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Exams from "./Exams";

@Entity("category")
export default class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Exams, (exam) => exam.category)
  exams: Exams[];
}
