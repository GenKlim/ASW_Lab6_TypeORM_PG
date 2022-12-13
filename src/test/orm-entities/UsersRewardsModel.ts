import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./UserModel"
import { Reward } from "./RewardModel"

@Entity({ name: "Users_Rewards" })
export class UsersRewards {
  @Column({
    type: "uuid",
    primary: true
  })
  ID: string;
  
  @Column({
    type: "timestamp",
  })
  DateTime: string;
  
  @Column({
    type: "uuid"
  })
  UserID: string;
  
  @Column({
    type: "uuid"
  })
  RewardID: string;
  
  @ManyToOne(() => User, (user) => user.users_rewards)
  @JoinColumn({ name: "UserID" })
    user: User
  
  @ManyToOne(() => Reward, (reward) => reward.users_rewards)
  @JoinColumn({ name: "RewardID" })
    reward: Reward
}