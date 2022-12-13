import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { User } from "./UserModel"
import { Reward } from "./RewardModel"
import { Article } from "./ArticleModel"
import { Exercise } from "./ExerciseModel"

@Entity({ name: "Files" })
export class File {
  /*@PrimaryGeneratedColumn({
    type: "uuid",
	unique: true
  })
  //@Generated("uuid")
  ID: string;*/
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
    length: 5
  })
  Expansion: string;
  
  @Column({
    type: "varchar",
    length: 128
  })
  Path: string;
  
  @Column({
	type: "integer",
    nullable: true
  })
  Size: number;
  
  @OneToMany(() => User, (user) => user.file)
    users: User[]
  
  @OneToMany(() => Reward, (reward) => reward.file)
    rewards: Reward[]
  
  @OneToMany(() => Article, (article) => article.file)
    articles: Article[]
  
  @OneToMany(() => Exercise, (exercise) => exercise.file)
    exercises: Exercise[]
}