import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import * as bcrypt from "bcryptjs";
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column()
    name: string;

    @Column()
    email: string;

    @Length(4, 20)
    @IsNotEmpty()
    @Column()
    password: string;

    @Column()
    isAdmin: boolean;

    @Column({nullable: true})
    comission: string;

    @Column()
    phone: string;

    hashPassword(password : string) {
        // return this.password = bcrypt.hashSync(password, 8);
        return bcrypt.hashSync(password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        // porque usar 'compareSync' ??? 
        return bcrypt.compareSync(unencryptedPassword, this.password); 
    }

}