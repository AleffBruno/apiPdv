import IUsersRepository from "../../repositories/IUsersRepository";
import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import { User } from "../../models/User";


class UsersRepository implements IUsersRepository {
    private users : User[] = [];

    public async getAll(): Promise<User[]> {
        return this.users;
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        const findUser = this.users.find(
            user => user.email == email
        );

        return findUser;
    }

    public async create({name, email, password, commission, phone}: ICreateUserDTO): Promise<User> {
        const user = new User();
        Object.assign(user, {
            id: Math.floor(Math.random() * 999) + 1,
            name,
            email,
            password,
            commission,
            phone
        })
        // user.id = Math.floor(Math.random() * 999) + 1;
        // user.name = name;
        // user.email = email;
        // user.password = password;
        // user.commission = commission;
        // user.phone = phone;
        this.users.push(user);
        return user;
    }

    public async findById(id: number): Promise<User | undefined> {
        const findUser = this.users.find(
            user => user.id == id
        );

        return findUser;
    }

    public async save(user: User): Promise<User> {
        return user;
    }

}

export default UsersRepository;