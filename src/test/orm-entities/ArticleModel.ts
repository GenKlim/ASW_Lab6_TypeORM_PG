import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { File } from "./FileModel"

@Entity({ name: "Articles" })
export class Article {
  @Column({
    type: "uuid",
    primary: true
  })
  ID: string;
  
  @Column({
    type: "varchar",
    length: 128
  })
  Title: string;
  
  @Column({
    type: "varchar",
	length: 10000
  })
  Description: string;
  
  @ManyToOne(() => File, (file) => file.articles)
  @JoinColumn({ name: "FileID" })
    file: File
}