import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { Product } from "./Product";
import { Pcategory } from "./Pcategory";

@Entity('pcategory_photos')
export class PcategoryPhoto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;

    @Column()
    originalName: string;

    @ManyToOne(type => Pcategory, pcategory => pcategory.pcategoryPhotos)
    pcategory: Pcategory;
    
}