import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany } from "typeorm";
import { Company } from "./Company";
import { ModifierItem } from "./ModifierItem";
import { Product } from "./Product";

@Entity('modifiers')
export class Modifier {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    maxAmount: string;

    @Column()
    isRequired: boolean;

    @ManyToOne(type => Company, company => company.modifiers)
    company: Company;

    @OneToMany(type => ModifierItem, ModifierItem => ModifierItem.modifier)
    modifierItems: ModifierItem[];

    @ManyToMany(type => Product, product => product.modifiers)
    products: Product[];
}