import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { StickersStatistics } from "./StickersStatisticsModel"

@Entity({ name: "Stickers" })
export class Sticker {
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
  Icon: number;
  
  @OneToMany(() => StickersStatistics, (stickers_statistics) => stickers_statistics.sticker)
    stickers_statistics: StickersStatistics[]
}