import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { Address } from "./Address";
import { State } from "./State";

@Entity('settings')
export class Settings {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cashControll: boolean;

    @Column()
    stockControll: boolean;

    @Column()
    alertSaleWithoutCustomer: boolean;

    @Column()
    alertSaleWithoutSeller: boolean;

    @Column()
    barcodeReader: boolean;

}