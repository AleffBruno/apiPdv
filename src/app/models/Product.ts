import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Company } from "./Company";
import { ProductPhoto } from "./ProductPhoto";
import { Pcategory } from "./Pcategory";

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

    @Column()
    unit: string;

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
    
    @ManyToMany(type => Pcategory, pcategory => pcategory.products)
    @JoinTable()
    pcategories: Pcategory[];
    

    // modifiersId

    // productVariationId
}