import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { Bcategory } from "./Bcategory";

@Entity('bsubcategories')
export class Bsubcategory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @ManyToOne(type => Bcategory, bcategory => bcategory.bsubcategories)
    bcategory: Bcategory;

}