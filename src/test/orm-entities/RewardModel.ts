import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { File } from "./FileModel"
import { UsersRewards } from "./UsersRewardsModel"

@Entity({ name: "Rewards" })
export class Reward {
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
    type: "integer"
  })
  Cost: number;
  
  @ManyToOne(() => File, (file) => file.rewards)
  @JoinColumn({ name: "FileID" })
    file: File
  
  @OneToMany(() => UsersRewards, (users_rewards) => users_rewards.reward)
    users_rewards: UsersRewards[]
}