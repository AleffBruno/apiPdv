import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { Bcategory } from "./Bcategory";
import { Company } from "./Company";

@Entity('cashcontrol')
export class CashControl {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    open: string;

    @Column()
    close: string;

    @Column()
    valueOpen: string;

    @Column()
    valueClose: string;

    @ManyToOne(type => Company, company => company.bills)
    company: Company;

}