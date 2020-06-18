import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { Bill } from "./BIll";

@Entity('payments')
export class Payment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    paymentDate: string;

    @Column()
    isPaid: boolean;

    @Column()
    wasPaidIn: string;
    
    @Column()
    description: string;

    @Column()
    value: string;

    @Column()
    installmentNumber: number;

    @ManyToOne(type => Bill, bill => bill.payments)
    bill: Bill;

}