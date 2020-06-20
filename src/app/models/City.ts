import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { Address } from "./Address";
import { State } from "./State";

@Entity('cities')
export class City {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255
    })
    name: string;

    @ManyToOne(type => State, state => state.cities)
    state: State;

    @OneToMany(type => Address, address => address.state)
    addresses: Address[];

}