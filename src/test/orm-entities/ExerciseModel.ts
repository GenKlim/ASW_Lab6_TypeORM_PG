import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { File } from "./FileModel"

@Entity({ name: "Exercises" })
export class Exercise {
  @Column({
    type: "uuid",
    primary: true
  })
  ID: string;
  
  @Column({
    type: "varchar",
    length: 128
  })
  Name: string;
  
  @Column({
    type: "varchar",
	length: 10000
  })
  Description: string;
  
  @ManyToOne(() => File, (file) => file.exercises)
  @JoinColumn({ name: "FileID" })
    file: File
}