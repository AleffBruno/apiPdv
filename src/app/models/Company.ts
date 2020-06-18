import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, OneToOne} from "typeorm";
import { User } from "./User";
import { Pcategory } from "./Pcategory";
import { Product } from "./Product";
import { Address } from "./Address";
import { Bill } from "./BIll";
import { CashControl } from "./CashControl";

@Entity('companies')
export class Company {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cpfCnpj: string;

    @Column()
    phone: string;

    @Column()
    masterPassword: string;

    @OneToMany(type => User, user => user.company)
    users: User[];

    @OneToMany(type => Product, product => product.company)
    products: Product[];

    @OneToMany(type => Bill, bill => bill.company)
    bills: Bill[];

    @OneToMany(type => Pcategory, pcategory => pcategory.company)
    productCategories: Pcategory[];

    @OneToOne(type => Address, address => address.company)
    @JoinColumn()
    address: Address;

    @OneToMany(type => CashControl, cashControl => cashControl.company)
    cashControl: CashControl[];
    
}