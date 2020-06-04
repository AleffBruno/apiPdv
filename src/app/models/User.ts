import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import * as bcrypt from "bcryptjs";
import { Company } from "./Company";
@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    // @IsNotEmpty()
    @Column()
    name: string;

    @Column()
    email: string;

    // @Length(4, 20)
    // @IsNotEmpty()
    @Column()
    password: string;

    @Column()
    isAdmin: boolean;

    @Column({nullable: true})
    commission: string;

    @Column()
    phone: string;

    @ManyToOne(type => Company, company => company.users,/* {
        cascade: ['insert']
    } */)
    company: Company;

    hashPassword(password : string) {
        // return this.password = bcrypt.hashSync(password, 8);
        return bcrypt.hashSync(password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password); 
    }

}