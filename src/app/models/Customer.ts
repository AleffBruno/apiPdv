import {Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn} from "typeorm";
import { Address } from "./Address";
import { Sale } from "./Sale";

@Entity('customers')
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    //ENUM ["pf"/"pj"]
    @Column()
    clientType: string;

    @Column()
    customerName: string;

    @Column()
    fantasyName: string;

    @Column()
    cpfCnpj: string;

    @Column()
    email: string;

    @Column()
    stateRegistration: string;

    @Column()
    municipalRegistration: string;

    @Column()
    phone: string;

    @Column()
    birthday: string;

    @Column()
    rg: string;

    @Column()
    maximumCustomerCredit: string;

    @Column()
    comments: string;

    @Column()
    exemptIcms: boolean;

    @Column()
    optingSimpleNational: boolean;

    // @OneToMany(type => Address, address => address.)
    // addresses: Address[];
    @OneToOne(type => Address, address => address.customer)
    @JoinColumn()
    address: Address;
    
    @OneToMany(type => Sale, sale => sale.customer)
    sales: Sale[];
}