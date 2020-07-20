import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { Address } from "./Address";
import { State } from "./State";
import { Modifier } from "./Modifier";

@Entity('modifier_items')
export class ModifierItem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    salePrice: string;

    @Column()
    costPrice: string;

    @ManyToOne(type => Modifier, modifier => modifier.modifierItems)
    modifier: Modifier;

}