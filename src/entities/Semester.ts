import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Course from "./Course";

@Entity("semester")
export default class Semester {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Course, (course) => course.semester)
  course: Course[];
}
