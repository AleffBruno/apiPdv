import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Address } from "./Address";
import { City } from "./City";

@Entity('states')
export class State {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255
    })
    name: string;

    @OneToMany(type => City, city => city.state)
    cities: City[];

    @OneToMany(type => Address, address => address.state)
    addresses: Address[];

}