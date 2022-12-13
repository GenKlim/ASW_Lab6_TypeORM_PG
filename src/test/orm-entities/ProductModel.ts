import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ProductsStatistics } from "./ProductsStatisticsModel"

@Entity({ name: "Products" })
export class Product {
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
    type: "float"
  })
  Weight: number;
  
  @Column({
    type: "float"
  })
  KCal: number;
  
  @Column({
    type: "float"
  })
  Proteins: number;
  
  @Column({
    type: "float"
  })
  CarboHydrates: number;
  
  @Column({
    type: "float"
  })
  Fats: number;
  
  @OneToMany(() => ProductsStatistics, (products_statistics) => products_statistics.product)
    products_statistics: ProductsStatistics[]
}