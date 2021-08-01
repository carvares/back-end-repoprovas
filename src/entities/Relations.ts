import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import Professors from "./Professors";
import Subjects from "./Subjects";

@Entity("relation")
export default class Relations {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(()=>Subjects, subject => subject.name)
  subject:Subjects;

  @ManyToOne(()=>Professors, professor => professor.name)
  professor:Professors;

}