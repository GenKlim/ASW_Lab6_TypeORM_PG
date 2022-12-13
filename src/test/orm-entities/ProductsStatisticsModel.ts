import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { Statistic } from "./StatisticModel"
import { Product } from "./ProductModel"

@Entity({ name: "Products_Statistics" })
export class ProductsStatistics {
  @Column({
    type: "uuid",
    primary: true
  })
  ID: string;
  
  @Column({
    type: "bit"
  })
  IsEaten: boolean;
  
  @Column({
    type: "uuid"
  })
  StatisticID: string;
  
  @Column({
    type: "uuid"
  })
  ProductID: string;
  
  @ManyToOne(() => Statistic, (statistic) => statistic.products_statistics)
  @JoinColumn({ name: "StatisticID" })
    statistic: Statistic
  
  @ManyToOne(() => Product, (product) => product.products_statistics)
  @JoinColumn({ name: "ProductID" })
    product: Product
}