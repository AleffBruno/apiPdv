import { User } from "../models/User";
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUsersRepository {
    getAll(): Promise<User[]>;
    findByEmail(email: string): Promise<User | undefined>;
    create(data: ICreateUserDTO) : Promise<User>;
    findById(id: number) : Promise<User | undefined>;
    save(user: User) : Promise<User>;
}