import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { Address } from "./Address";
import { User } from "./User";
import { Customer } from "./Customer";
import { Company } from "./Company";
import { SaleToPaymentType } from "./SaleToPaymentType";

@Entity('sales')
export class Sale {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    troco: string;

    @Column()
    additionSale: string;

    @Column()
    totalSale: string;

    @Column()
    totalCost: string;

    @Column()
    totalDiscount: string;

    @Column()
    status: string;

    @ManyToOne(type => User, user => user.sales)
    user: User;

    @ManyToOne(type => Customer, customer => customer.sales)
    customer: Customer;

    @ManyToOne(type => Company, company => company.sales)
    company: Company;

    @Column()
    paymentTypeID: string;

    @OneToMany(type => SaleToPaymentType, saleToPaymentType => saleToPaymentType.sale)
    public saleToPaymentTypes!: SaleToPaymentType[];
}