// import dotenv from "dotenv";
// dotenv.config();  

// export const getUsers = () => {
//     return "getUsers"
// };
import { User } from '../models/User';
import { getConnection, getRepository, Repository } from 'typeorm';

//criei a interfaceDTO aqui foda-se ???
interface RequestDTO {
    name: string,
    email: string,
    password: string,
    commission: string,
    phone: string
}

class UserService {
    private userRepository : Repository<User>;

    constructor() {
        this.userRepository = getConnection().getRepository(User);
    }

    public getUsers() : Promise<User[]> {
        // let userRepository = getConnection().getRepository(User);
        return this.userRepository.find({}); // ta faltando await?
    }

    public async create({ name, email, password, commission, phone } : RequestDTO) : Promise<User> {
        // const userRepository = getRepository(User);
        const userExists = await this.userRepository.find({where:{email: email}});

        if(userExists.length > 0) {
            throw Error('email aready exists');
        }

        const user = new User();
        user.email = email;
        user.password = user.hashPassword( password );
        user.isAdmin = false;
        user.name = name;
        user.phone = phone;
        user.commission = commission;

        await this.userRepository.save(user);

        return user;
    }
}

export default UserService;