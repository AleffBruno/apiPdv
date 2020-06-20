import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne} from "typeorm";
import { State } from "./State";
import { City } from "./City";
import { Company } from "./Company";
import { Customer } from "./Customer";
import { Provider } from "./Provider";

@Entity('addresses')
export class Address {

    @PrimaryGeneratedColumn()
    id: number;

    // ENUM ["company","user"], pra saber oque é endereço de cliente e empresa
    @Column()
    belongsTo: string;

    @Column({
        length: 100,
        nullable: true
    })
    neighborhood: string;

    @Column({
        length: 30,
        nullable: true
    })
    cep: string;

    @Column({
        length: 255,
        nullable: true
    })
    street: string;

    @Column({
        length: 30,
        nullable: true
    })
    number: string;

    @Column({
        length: 100,
        nullable: true
    })
    complement: string;

    @ManyToOne(type => State, state => state.addresses)
    state: State;

    @ManyToOne(type => City, city => city.addresses)
    city: City;

    // @OneToMany(type => Company, company => company.address)
    // companies: Company[];
    @OneToOne(type => Company, company => company.address)
    company: Company;

    @OneToOne(type => Customer, customer => customer.address)
    customer: Customer;

    @OneToOne(type => Provider, provider => provider.address)
    provider: Provider;
}