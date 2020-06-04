import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Address } from "./Address";

@Entity('cities')
export class City {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255
    })
    name: string;

    @OneToMany(type => Address, address => address.state)
    addresses: Address[];

}