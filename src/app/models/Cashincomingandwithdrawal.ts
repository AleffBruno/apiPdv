import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";


@Entity()
export class Cashincomingandwithdrawal {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cashId: string;

    @Column()
    date: string;

    @Column()
    hour: string;

    @Column()
    comment: string;

    @Column()
    type: string;

}