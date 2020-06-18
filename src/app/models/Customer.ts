import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Address } from "./Address";

@Entity('customers')
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    //ENUM ["pf"/"pj"]
    @Column()
    clientType: string;

    @Column()
    companyName: string;

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

    @OneToMany(type => Address, address => address.state)
    addresses: Address[];

    
}