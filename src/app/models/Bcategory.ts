import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { Bill } from "./BIll";
import { Company } from "./Company";
import { Bsubcategory } from "./Bsubcategory";

@Entity('bcategories')
export class Bcategory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @OneToMany(type => Bill, bill => bill.category)
    bills: Bill[];

    @ManyToOne(type => Company, company => company.productCategories)
    company: Company;

    @OneToMany(type => Bsubcategory, bsubcategory => bsubcategory.bcategory)
    bsubcategories: Bsubcategory[];
}