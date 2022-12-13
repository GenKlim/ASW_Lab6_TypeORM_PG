import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { Sticker } from "./StickerModel"
import { Statistic } from "./StatisticModel"

@Entity({ name: "Stickers_Statistics" })
export class StickersStatistics {
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
    type: "uuid"
  })
  StickerID: string;
  
  @Column({
    type: "uuid"
  })
  StatisticID: string;
  
  @ManyToOne(() => Sticker, (sticker) => sticker.stickers_statistics)
  @JoinColumn({ name: "StickerID" })
    sticker: Sticker
  
  @ManyToOne(() => Statistic, (statistic) => statistic.stickers_statistics)
  @JoinColumn({ name: "StatisticID" })
    statistic: Statistic
}