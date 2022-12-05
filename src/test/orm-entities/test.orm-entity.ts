import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'test' })
export class TestORMEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  txt: string;
}