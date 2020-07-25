import IUsersRepository from "../../../repositories/IUsersRepository";
import ICreateUserDTO from "../../../dtos/ICreateUserDTO";
import { User } from "../../../models/User";
import { Repository, getRepository } from "typeorm";

class UsersRepository implements IUsersRepository {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }

    public async getAll(): Promise<User[]> {
        return this.ormRepository.find({});
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        return await this.ormRepository.findOne({
            where: {email}
        });
    }

    public async create({name, email, password, commission, phone}: ICreateUserDTO): Promise<User> {
        const user = this.ormRepository.create({name, email, password, commission, phone});
        return await this.ormRepository.save(user);
    }

    public async findById(id: number): Promise<User | undefined> {
        return await this.ormRepository.findOne(id);
    }
    public async save(user: User): Promise<User> {
        return await this.ormRepository.save(user);
    }

}

export default UsersRepository;