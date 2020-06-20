import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany} from "typeorm";
import { Company } from "./Company";
import { Product } from "./Product";
import { PcategoryPhoto } from "./PcategoryPhoto";


@Entity('pcategories')
export class Pcategory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    showOnline: boolean;

    @ManyToOne(type => Company, company => company.pcategories)
    company: Company;

    // @ManyToMany(type => Product, product => product.pcategories)
    // products: Product[];
    @OneToMany(type => Product, product => product.pcategories)
    products: Product[];

    @OneToMany(type => PcategoryPhoto, pcategoryPhoto => pcategoryPhoto.pcategory)
    pcategoryPhotos: PcategoryPhoto[];
    
}