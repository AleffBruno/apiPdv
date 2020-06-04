import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Address } from "./Address";

@Entity('states')
export class State {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255
    })
    name: string;

    @OneToMany(type => Address, address => address.state)
    addresses: Address[];

}