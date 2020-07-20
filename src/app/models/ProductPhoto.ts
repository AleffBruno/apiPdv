import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { Product } from "./Product";

@Entity('product_photos')
export class ProductPhoto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;

    @Column()
    originalName: string;

    @ManyToOne(type => Product, product => product.productPhotos)
    product: Product;
    
}