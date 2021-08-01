import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Categories from "./Categories";
import Professors from "./Professors";
import Subjects from "./Subjects";

@Entity("tests")
export default class Tests {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(()=> Categories, category => category.name)
  category: Categories;

  @ManyToOne(()=>Subjects, subject => subject.name)
  subject:Subjects;

  @ManyToOne(()=>Professors, professor => professor.name)
  professor:Professors;
  @Column()
  link:string;
}
