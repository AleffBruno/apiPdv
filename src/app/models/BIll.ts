import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { Address } from "./Address";
import { Company } from "./Company";
import { Payment } from "./Payment";

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
    isMonthFixed: boolean;

    @Column()
    receiveNotification: boolean;

    @Column()
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

}