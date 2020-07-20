import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Company } from "./Company";
import { ProductPhoto } from "./ProductPhoto";
import { Pcategory } from "./Pcategory";
import { Unit } from "./Unit";
import { ProductVariation } from "./ProductVariation";
import { Modifier } from "./Modifier";

@Entity('products')
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    code: string;

    @Column("decimal", { precision: 5, scale: 2 })
    salePrice: number;

    @Column("decimal", { precision: 5, scale: 2 })
    costPrice: number;

    @Column()
    canEditValue: boolean;

    @Column()
    barCode: string;

    @Column("decimal", { precision: 5, scale: 2 })
    minStock: number;

    @Column()
    controlStock: boolean;

    @Column({nullable: true})
    observations: string;

    @Column()
    showProductOnline: boolean;

    @Column()
    netWeight: string;

    @Column()
    grossWeight: string;

    @Column()
    catalogDescription: string;

    @Column()
    hasVariation: boolean;

    @Column()
    productGeneratesCommision: boolean;

    @ManyToOne(type => Company, company => company.products)
    company: Company;

    @OneToMany(type => ProductPhoto, productPhoto => productPhoto.product)
    productPhotos: ProductPhoto[];
    
    // @ManyToMany(type => Pcategory, pcategory => pcategory.products)
    // @JoinTable()
    // pcategories: Pcategory[];
    @ManyToOne(type => Pcategory, pcategory => pcategory.products)
    pcategories: Pcategory[];

    @ManyToOne(type => Unit, unit => unit.products)
    unit: Unit;

    @OneToMany(type => ProductVariation, productVariation => productVariation.product)
    productVariations: ProductVariation[];

    @ManyToMany(type => Modifier, modifier => modifier.products)
    @JoinTable()
    modifiers: Modifier[];

    // modifiersId

    // productVariationId
}