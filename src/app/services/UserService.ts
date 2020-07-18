// import dotenv from "dotenv";
// dotenv.config();  

// export const getUsers = () => {
//     return "getUsers"
// };
import { User } from '../models/User';
import { getRepository, Repository } from 'typeorm';
import * as bcrypt from "bcryptjs";

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
        this.userRepository = getRepository(User);
    }

    public getUsers() : Promise<User[]> {
        // let userRepository = getConnection().getRepository(User);
        return this.userRepository.find({}); // ta faltando await?
    }

    public async create({ name, email, password, commission, phone } : RequestDTO) : Promise<User> {
        // const userRepository = getRepository(User);
        const userExists = await this.userRepository.findOne({where:{email: email}});

        if(userExists) {
            throw Error('email aready exists');
        }

        const hashedPassword = await bcrypt.hash(password, 8);

        const user = new User();
        user.email = email;
        user.password = hashedPassword;
        user.isAdmin = false;
        user.name = name;
        user.phone = phone;
        user.commission = commission;

        await this.userRepository.save(user);

        return user;
    }
}

export default UserService;