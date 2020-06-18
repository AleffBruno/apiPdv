import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Product } from "./Product";

@Entity('units')
export class Unit {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @Column()
    description: string;

    @OneToMany(type => Product, product => product.unit)
    products: Product[];
}