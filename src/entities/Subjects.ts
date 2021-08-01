import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import Semesters from "./Semesters";
import Professors from "./Professors";

@Entity("subjects")
export default class Subjects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(()=> Semesters, semester => semester.semester)
  semester: Semesters

  @ManyToMany(()=> Professors, professor => professor.subject)
  @JoinTable({name:"relation"})
  professor: Professors[];
}
