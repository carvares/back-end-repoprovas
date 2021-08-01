import { Entity, PrimaryGeneratedColumn, Column , ManyToMany, JoinTable} from "typeorm";
import Subjects from "./Subjects";

@Entity("professors")
export default class Professors {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(()=> Subjects, subject => subject.professor)
  @JoinTable({name:"relation"})
  subject: Subjects[];
}
