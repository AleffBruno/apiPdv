import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { Address } from "./Address";
import { Company } from "./Company";
import { Payment } from "./Payment";
import { Bcategory } from "./Bcategory";

@Entity('bills')
export class Bill {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    defaultName: string;

    @Column()
    defaultValue: string;

    //ENUM ["REVENUE","EXPENSE"]
    @Column()
    type: string;

    @Column()
    firstPaymentDate: string;

    @Column()
    isMonthlyFixed: boolean;

    @Column()
    receiveNotification: boolean;

    @Column({nullable:true})
    notificationDate: string;

    @Column()
    extraAnnotations: string;

    @Column()
    isInstallment: boolean;

    //xxxxxxxxxxxxxx
    @ManyToOne(type => Company, company => company.bills)
    company: Company;

    @OneToMany(type => Payment, payment => payment.bill)
    payments: Payment[];

    @ManyToOne(type => Bcategory, bcategory => bcategory.bills)
    category: Company;

}