import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("periods")
export default class Semesters {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  semester: string;
}
