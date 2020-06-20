import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { Address } from "./Address";
import { State } from "./State";
import { Sale } from "./Sale";
import { PaymentType } from "./PaymentType";

@Entity('sale_to_payment_type')
export class SaleToPaymentType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    public saleId!: number;

    @Column()
    public paymentTypeId!: number;

    @Column()
    public valuePaymentSale!: string;

    @ManyToOne(type => Sale, sale => sale.saleToPaymentTypes)
    public sale!: Sale;

    @ManyToOne(type => PaymentType, paymentType => paymentType.saleToPaymentTypes)
    public paymentType!: PaymentType;

}