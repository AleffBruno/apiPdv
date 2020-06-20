import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, OneToOne, JoinColumn} from "typeorm";
import { Address } from "./Address";
import { Company } from "./Company";

@Entity('providers')
export class Provider {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    nick: string;

    //ENUM ,["pf","pj"]
    @Column()
    providerType: string;

    @Column()
    cpfCnpj: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    cellphone: string;

    @Column()
    rgIE: string;

    @Column()
    maxValueInCustomerAccount: string;

    @Column()
    observations: string;

    @Column()
    isentoIcms: boolean;

    @Column()
    optantePeloSimples: boolean;

    @OneToOne(type => Address, address => address.provider)
    @JoinColumn()
    address: Address;

    @ManyToOne(type => Company, company => company.providers)
    company: Company;
}