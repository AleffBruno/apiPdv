import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { Product } from "./Product";

@Entity('cities')
export class ProductVariation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    variationName: string;

    @Column()
    priceVariation: string;

    @Column()
    costVariation: string;

    @Column()
    amountVariation: string;

    @ManyToOne(type => Product, product => product.productVariations)
    product: Product;


}