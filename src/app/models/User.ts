import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import * as bcrypt from "bcryptjs";
import { Company } from "./Company";
import { Sale } from "./Sale";
@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    // @IsNotEmpty()
    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    // @Length(4, 20)
    // @IsNotEmpty()
    @Column()
    password: string;

    @Column({default: 0})
    isAdmin: boolean;

    @Column({nullable: true})
    commission: string;

    @Column()
    phone: string;

    @Column({nullable: true})
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(type => Company, company => company.users,/* {
        cascade: ['insert']
    } */)
    company: Company;

    @OneToMany(type => Sale, sale => sale.user)
    sales: Sale[];

    hashPassword(password : string) {
        // return this.password = bcrypt.hashSync(password, 8);
        return bcrypt.hashSync(password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password); 
    }

}