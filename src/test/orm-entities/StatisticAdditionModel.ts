import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { Statistic } from "./StatisticModel"

@Entity({ name: "StatisticAdditions" })
export class StatisticAddition {
  @Column({
    type: "uuid",
    primary: true
  })
  ID: string;
  
  @Column({
    type: "varchar",
    length: 128
  })
  Text: string;
  
  @Column({
    type: "integer"
  })
  Type: number;
  
  @Column({
    type: "bit"
  })
  IsDone: boolean;
  
  @Column({
    type: "uuid"
  })
  StatisticID: string;
  
  @ManyToOne(() => Statistic, (statistic) => statistic.statisticadditions)
  @JoinColumn({ name: "StatisticID" })
    statistic: Statistic
}