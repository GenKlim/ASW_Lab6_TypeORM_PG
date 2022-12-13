import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { File } from "./FileModel"
import { Role } from "./RoleModel"
import { UsersRewards } from "./UsersRewardsModel"
import { Statistic } from "./StatisticModel"

@Entity({ name: "Users" })
export class User {
  /*@PrimaryGeneratedColumn({
    type: "uuid",
	unique: true
  })
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
  Login: string;
  
  @Column({
    type: "bit varying",
	length: 8192
  })
  Password: string;
  
  @Column({
    type: "varchar",
	length: 128
  })
  UserName: string;
  
  @Column({
    type: "date",
	nullable: true
  })
  Birthday: string;
  
  @Column({
    type: "bit"
  })
  Gender: boolean;
  
  @Column({
    type: "float",
	nullable: true
  })
  Height: number;
  
  @Column({
    type: "float",
	nullable: true
  })
  Weight: number;
  
  @Column({
    type: "timestamp",
	nullable: true
  })
  LastActivity: string;
  
  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: "RoleID" })
    role: Role
  
  @ManyToOne(() => File, (file) => file.users)
  @JoinColumn({ name: "FileID" })
    file: File
  
  @OneToMany(() => UsersRewards, (users_rewards) => users_rewards.user)
    users_rewards: UsersRewards[]
  
  @OneToMany(() => Statistic, (statistic) => statistic.user)
    statistics: Statistic[]
}