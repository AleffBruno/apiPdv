import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { User } from "./User";

@Entity('companies')
export class Company {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cpfCnpj: string;

    @Column()
    phone: string;

    @Column()
    masterPassword: string;

    @OneToMany(type => User, user => user.company)
    users: User[];
    
}