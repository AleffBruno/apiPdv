import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { SaleToPaymentType } from "./SaleToPaymentType";

@Entity('payment_types')
export class PaymentType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    amountInstallments: string;

    @OneToMany(type => SaleToPaymentType, saleToPaymentType => saleToPaymentType.paymentType)
    public saleToPaymentTypes!: SaleToPaymentType[];
}