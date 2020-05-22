import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Company {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cpfcnpj: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    masterPassword: string;
    
}