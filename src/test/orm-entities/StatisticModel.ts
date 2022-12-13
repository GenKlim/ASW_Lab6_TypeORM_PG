import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { User } from "./UserModel"
import { StatisticAddition } from "./StatisticAdditionModel"
import { ProductsStatistics } from "./ProductsStatisticsModel"
import { StickersStatistics } from "./StickersStatisticsModel"

@Entity({ name: "Statistics" })
export class Statistic {
  @Column({
    type: "uuid",
    primary: true
  })
  ID: string;
  
  @Column({
    type: "date"
  })
  Date: string;
  
  @Column({
    type: "float"
  })
  GoalKCal: number;
  
  @Column({
    type: "float"
  })
  GoalProteins: number;
  
  @Column({
    type: "float"
  })
  GoalCarboHydrates: number;
  
  @Column({
    type: "float"
  })
  GoalFats: number;
  
  @Column({
    type: "float"
  })
  ActualKCal: number;
  
  @Column({
    type: "float"
  })
  ActualProteins: number;
  
  @Column({
    type: "float"
  })
  ActualCarboHydrates: number;
  
  @Column({
    type: "float"
  })
  ActualFats: number;
  
  @ManyToOne(() => User, (user) => user.statistics)
  @JoinColumn({ name: "UserID" })
    user: User
  
  @OneToMany(() => StatisticAddition, (statisticaddition) => statisticaddition.statistic)
    statisticadditions: StatisticAddition[]
  
  @OneToMany(() => ProductsStatistics, (products_statistics) => products_statistics.statistic)
    products_statistics: ProductsStatistics[]
  
  @OneToMany(() => StickersStatistics, (stickers_statistics) => stickers_statistics.statistic)
    stickers_statistics: StickersStatistics[]
}